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
		"content": `<style>.ewupmsbzh {
  d: path("M8.5 5.5h7V10h-7Zm-.25 8.25h.01m9.74 1L21 16v2.25c0 1.75-1.25 2.75-3 3.5c-1.75-.75-3-1.75-3-3.5V16Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z82lrzb-f {
  d: path("M5 21.5v-18q0-.098.019-.195t.057-.188t.093-.173t.124-.151t.151-.124t.173-.093t.188-.057T6 2.5h12q.098 0 .195.019t.188.057t.173.093q.081.054.151.124t.124.151q.055.082.093.173t.057.188T19 3.5v8.672M2.5 21.5h10.7");
}
</style><g class="ulnmmdpxh"><path class="z82lrzb-f"/><path class="ewupmsbzh"/></g>`,
		"fallback": "uix-sharp:security-turnstile",
	});
}

export default Component;
