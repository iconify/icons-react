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
		"content": `<style>.q87ojbbak {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m18.71 4.57l.72.72q1.41 1.41 0 2.82l-5.49 5.49q-1.41 1.41-2.82 0l-.72-.72q-1.41-1.41 0-2.82l5.49-5.49q1.41-1.41 2.82 0M7.93 14.65l1.42 1.42q.53.53-.16.82l-2.86 1.18q-.69.29-.4-.4l1.18-2.86q.29-.69.82-.16m9.02-7.6l-2.48 2.48");
}
</style><path class="q87ojbbak"/>`,
		"fallback": "iconoven:stylus-pen",
	});
}

export default Component;
