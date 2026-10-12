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
		"content": `<style>.brpks1taa {
  d: path("m12 2.75l1.5 3L12 8l-1.5-2.25ZM12 8v7m0 4v2.25m0-8.75c-4 0-6.5-2-6.5-5.5m6.5 5.5c4 0 6.5-2 6.5-5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.igopog-6q {
  d: path("m5.5 3.25l1.25 2.5L5.5 7.5L4.25 5.75Zm13 0l1.25 2.5L18.5 7.5l-1.25-1.75ZM9.75 15h4.5q.5 0 .2.4l-.9 1.2q-.3.4 0 .8l.9 1.2q.3.4-.2.4h-4.5q-.5 0-.2-.4l.9-1.2q.3-.4 0-.8l-.9-1.2q-.3-.4.2-.4");
}
</style><g class="hntgybcog"><path class="brpks1taa"/><path class="igopog-6q"/></g>`,
		"fallback": "iconoven:trishul",
	});
}

export default Component;
