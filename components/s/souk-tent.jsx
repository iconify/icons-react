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
		"content": `<style>.m7oyk_6sy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 6.75l7.7-3.65q.8-.35 1.6 0l7.7 3.65V8.5a1.7 1.7 0 0 1-3.4 0a1.7 1.7 0 0 1-3.4 0a1.7 1.7 0 0 1-3.4 0a1.7 1.7 0 0 1-3.4 0a1.7 1.7 0 0 1-3.4 0Zm1 4v10.5m15-10.5v10.5m-15-4.5h15m-11.5 0c0-2.5 1.75-4 4-4s4 1.5 4 4Z");
}
</style><path class="m7oyk_6sy"/>`,
		"fallback": "iconoven:souk-tent",
	});
}

export default Component;
