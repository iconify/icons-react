import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x68gwys6z {
  fill: currentColor;
  d: path("M4.423 5.5v-1h15.154v1zm.077 14v-6H3.27v-1l1.153-5h15.154l1.154 5v1H19.5v6h-1v-6h-5v6zm1-1h7v-5h-7z");
}
</style><path class="x68gwys6z"/>`,
		"fallback": "material-symbols-light:store",
	});
}

export default Component;
