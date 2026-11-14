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
		"content": `<style>.zsb1s3b5u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0m9.5 4l5.5 5.5M3.211 19.814l.172-1.376a1.5 1.5 0 0 1 1.014-1.237l3.014-1.005a1.5 1.5 0 0 1 1.145.082l2.331 1.165a1.5 1.5 0 0 1 .771 1.754l-.347 1.215A1.5 1.5 0 0 1 9.869 21.5h-5.17a1.5 1.5 0 0 1-1.488-1.686");
}
</style><path class="zsb1s3b5u"/>`,
		"fallback": "uix:magnifier-artefact",
	});
}

export default Component;
