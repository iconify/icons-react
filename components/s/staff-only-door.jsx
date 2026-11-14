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
		"content": `<style>.hkwzi1bdl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 21.5v-18q0-.098.019-.195t.057-.188t.093-.173t.124-.151t.151-.124t.173-.093t.188-.057T6 2.5h11q.098 0 .195.019t.188.057t.173.093q.081.054.151.124t.124.151q.055.082.093.173t.057.188T18 3.5v8.972M2.5 21.5h8.7M15 12h.01M14 15.25h8v6.5h-8Zm2.5 3.25h.01m2.24-1H20m-1.25 2.25H20");
}
</style><path class="hkwzi1bdl"/>`,
		"fallback": "uix-sharp:staff-only-door",
	});
}

export default Component;
