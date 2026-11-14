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
		"content": `<style>.lpt_t9bzm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.808 8.763l.465.87a1.5 1.5 0 0 0 1.06.77l.972.173a.916.916 0 0 1 .499 1.538l-.684.711a1.5 1.5 0 0 0-.405 1.246l.136.978a.916.916 0 0 1-1.308.95l-.888-.431a1.5 1.5 0 0 0-1.31 0l-.888.431a.916.916 0 0 1-1.308-.95l.136-.978a1.5 1.5 0 0 0-.405-1.246l-.684-.711a.916.916 0 0 1 .499-1.538l.972-.173a1.5 1.5 0 0 0 1.06-.77l.465-.87a.916.916 0 0 1 1.616 0M20 6.5h-4.5L15 11q1.125-.75 2.25-.75c1.75 0 3 1.25 3 3.25S18.75 17 17 17c-1.25 0-2.25-.5-2.75-1.5");
}
</style><path class="lpt_t9bzm"/>`,
		"fallback": "uix:rating-five",
	});
}

export default Component;
