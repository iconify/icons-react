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
		"content": `<style>.n2hbcv4kg {
  fill: currentColor;
  d: path("M14 17V8h9v7h-7zm-9 6V1h14v6h-2V6H7v12h10v-1h2v6z");
}
</style><path class="n2hbcv4kg"/>`,
		"fallback": "material-symbols:stream-apps-sharp",
	});
}

export default Component;
