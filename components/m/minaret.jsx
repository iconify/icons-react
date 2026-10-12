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
		"content": `<style>.q6c4nebpj {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 19.5v-3");
}

.w-i-r6wac {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75V4.5m0 0c1.6 1.1 2.5 2.4 2.5 4h-5c0-1.6.9-2.9 2.5-4m-1.25 4h2.5q.5 0 .5.5v2.5q0 .5.5.5H15q.5 0 .5.5v.75q0 .5-.37.5q-.38 0-.33.5l.65 6.5q.05.5-.45.5H9q-.5 0-.45-.5l.65-6.5q.05-.5-.32-.5q-.38 0-.38-.5v-.75q0-.5.5-.5h.75q.5 0 .5-.5V9q0-.5.5-.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="w-i-r6wac"/><path class="q6c4nebpj"/></g>`,
		"fallback": "iconoven:minaret",
	});
}

export default Component;
