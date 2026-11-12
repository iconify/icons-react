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
		"content": `<style>.bpzqxgbrb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 20H4V4h16v4m-7 8h8v5h-8Zm2 0v-1a2 2 0 1 1 4 0v1");
}
</style><path class="bpzqxgbrb"/>`,
		"fallback": "coolicons:note-lock-corner-sharp",
	});
}

export default Component;
