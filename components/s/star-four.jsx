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
		"content": `<style>.z14ldk36o {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m13.931 6.228l1 2.433q.119.289.408.408l2.433 1q1.293.533 1.293 1.931t-1.292 1.93l-2.434 1.001q-.289.119-.408.408l-1 2.433q-.533 1.293-1.931 1.293t-1.93-1.292l-1.001-2.434q-.119-.289-.408-.408l-2.433-1Q4.935 13.398 4.935 12t1.292-1.93l2.434-1.001q.289-.119.408-.408l1-2.433Q10.602 4.935 12 4.935t1.93 1.292z");
}
</style><path class="z14ldk36o"/>`,
		"fallback": "uix-solid:star-four",
	});
}

export default Component;
