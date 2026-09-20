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
		"content": `<style>.zjfbkjutw {
  fill: currentColor;
  d: path("M18.292 19L7 7.708V15H6V6h9v1H7.708L19 18.292z");
}
</style><path class="zjfbkjutw"/>`,
		"fallback": "material-symbols-light:north-west-outline",
	});
}

export default Component;
