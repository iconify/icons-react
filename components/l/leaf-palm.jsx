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
		"content": `<style>.a5lqsrbau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5V11m0 0Q7 4.5 2.75 8.5M12 11q-6-1.5-8.5 4.5M12 11q5-6.5 9.25-2.5M12 11q6-1.5 8.5 4.5M12 11q-1-4.5.5-8");
}
</style><path class="a5lqsrbau"/>`,
		"fallback": "uix-sharp:leaf-palm",
	});
}

export default Component;
