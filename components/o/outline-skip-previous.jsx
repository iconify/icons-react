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
		"content": `<style>.hef6o_beo {
  fill: currentColor;
  d: path("M6 6h2v12H6zm3.5 6l8.5 6V6zm6.5 2.14L12.97 12L16 9.86z");
}
</style><path class="hef6o_beo"/>`,
		"fallback": "ic:outline-skip-previous",
	});
}

export default Component;
