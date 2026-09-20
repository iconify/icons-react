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
		"content": `<style>.jdo3lbcxp {
  fill: currentColor;
  d: path("M8.125 7.092L12 1.937l3.875 5.155l6.139 2.07l-3.941 5.336l.156 6.056L12 18.733l-6.229 1.82l.156-6.08l-3.915-5.312z");
}
</style><path class="jdo3lbcxp"/>`,
		"fallback": "material-symbols-light:kid-star-sharp",
	});
}

export default Component;
