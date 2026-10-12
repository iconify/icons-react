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
		"content": `<style>.q_yu4ob_l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.25c3.75 0 6.25 3.75 6.25 8.75s-2.5 8.75-6.25 8.75S5.75 17 5.75 12S8.25 3.25 12 3.25ZM8.75 12h6.5");
}
</style><path class="q_yu4ob_l"/>`,
		"fallback": "iconoven:theta-sharp",
	});
}

export default Component;
