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
		"content": `<style>.su2z5gbks {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.25h12q1 0 1.2.98l1.85 9.04q.2.98-.8.98H3.75q-1 0-.8-.98L4.8 4.23Q5 3.25 6 3.25m6 0v11m-8.05-5.5h16.1M12 14.25v7m-3.5 0h7");
}
</style><path class="su2z5gbks"/>`,
		"fallback": "iconoven:solar-panel",
	});
}

export default Component;
