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
		"content": `<style>.een9bablf {
  fill: currentColor;
  d: path("M11.385 19V6.25H6.019V5H18v1.25h-5.365V19z");
}
</style><path class="een9bablf"/>`,
		"fallback": "material-symbols-light:title-sharp",
	});
}

export default Component;
