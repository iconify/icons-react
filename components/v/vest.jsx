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
		"content": `<style>.wsxoawbsz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.03 3.6l3.44 5.55q.53.85 1.06 0l3.44-5.55q.53-.85.74.13l.58 2.79q.21.98.92 1.69l.58.58q.71.71.71 1.71v7.75q0 1-.87 1.5l-1.76 1q-.87.5-1.81.15l-2.12-.8q-.94-.35-1.88 0l-2.12.8q-.94.35-1.81-.15l-1.76-1q-.87-.5-.87-1.5V10.5q0-1 .71-1.71l.58-.58q.71-.71.92-1.69l.58-2.79q.21-.98.74-.13M12 11.75V18");
}
</style><path class="wsxoawbsz"/>`,
		"fallback": "iconoven:vest",
	});
}

export default Component;
