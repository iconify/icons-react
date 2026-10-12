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
		"content": `<style>.d4ee3cr2h {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3.25 9.5h.01m17.49 0h.01");
}

.y5-f-tfmc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.6 8.5h2.8q.6 0 .8.57l4.1 11.61q.2.57-.4.57H6.1q-.6 0-.4-.57L9.8 9.07q.2-.57.8-.57M3.25 21.25V11.5m17.5 9.75V11.5m-17.5 1c1.25 2.25 2.75 2.75 4.25 2m13.25-2c-1.25 2.25-2.75 2.75-4.25 2");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="y5-f-tfmc"/><path class="d4ee3cr2h"/></g>`,
		"fallback": "iconoven:red-carpet",
	});
}

export default Component;
