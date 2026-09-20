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
		"content": `<style>.ncbeau7-m {
  fill: currentColor;
  d: path("M13 20.5v-1h7v1zm3-2.77V6.578h-5.308v3.654H4.398L7.128 4h3.564v1.577H17v12.154z");
}
</style><path class="ncbeau7-m"/>`,
		"fallback": "material-symbols-light:table-lamp-sharp",
	});
}

export default Component;
