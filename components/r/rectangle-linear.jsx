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
		"content": `<style>.am2miackj {
  fill: none;
  stroke: currentColor;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15 19H9C6.1911 19 4.7866 19 3.7777 18.326C3.341 18.034 2.966 17.659 2.6741 17.222C2 16.213 2 14.809 2 12C2 9.191 2 7.787 2.6741 6.778C2.966 6.341 3.341 5.966 3.7777 5.674C4.7866 5 6.1911 5 9 5H15C17.8089 5 19.2134 5 20.2223 5.674C20.659 5.966 21.034 6.341 21.3259 6.778C22 7.787 22 9.191 22 12C22 14.809 22 16.213 21.3259 17.222C21.034 17.659 20.659 18.034 20.2223 18.326C19.2134 19 17.8089 19 15 19Z");
}
</style><path class="am2miackj"/>`,
		"fallback": "solar:rectangle-linear",
	});
}

export default Component;
