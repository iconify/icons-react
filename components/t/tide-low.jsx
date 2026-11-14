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
		"content": `<style>.kssnl8bvy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14C7 9 17 9 21.5 14M12 2.5V7M9.5 4.5L12 7l2.5-2.5M2.5 18q2.375-2 4.75 0T12 18t4.75 0t4.75 0");
}
</style><path class="kssnl8bvy"/>`,
		"fallback": "uix-sharp:tide-low",
	});
}

export default Component;
