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
		"content": `<style>.moqyd-b_t {
  fill: currentColor;
  d: path("M2.25 10a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm4.25 0A1.25 1.25 0 1 0 9 10a1.25 1.25 0 1 0-2.5 0Zm4.25 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM15 10a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm4.25 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.nrypurbzj {
  d: path("M2.5 14.5h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="moqyd-b_t"/><path class="nrypurbzj"/></g>`,
		"fallback": "uix-sharp:start-lights-out",
	});
}

export default Component;
