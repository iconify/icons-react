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
		"content": `<style>.dqds_sbme {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 17.5h3.5m11.5 0h3.5m-8.54-2.54l1.83 1.83q.71.71 0 1.42l-1.83 1.83q-.71.71-1.42 0l-1.83-1.83q-.71-.71 0-1.42l1.83-1.83q.71-.71 1.42 0M12 12V8.75m.75-5.5h4.75q.75 0 .35.63l-.95 1.49q-.4.63 0 1.26l.95 1.49q.4.63-.35.63h-4.75Q12 8.75 12 8V4q0-.75.75-.75");
}
</style><path class="dqds_sbme"/>`,
		"fallback": "iconoven:milestone",
	});
}

export default Component;
