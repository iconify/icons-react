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
		"content": `<style>.cere1k-8a {
  d: path("M16 9.75L18.25 12L16 14.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lc0r_-bgm {
  d: path("M13 21v-6.2m0-5.6V4q0-.098.019-.195t.057-.188t.093-.173t.124-.151t.151-.124t.173-.093t.188-.057T14 3h6q.098 0 .195.019t.188.057t.173.093q.081.054.151.124t.124.151q.055.082.093.173t.057.188T21 4v7.872m0 .2V21m-9.5 0H22M2.5 6l1 1l1.75-2.25m2 1.25H9m-6.5 6l1 1l1.75-2.25m2 1.25H9m-6.5 6l1 1l1.75-2.25m2 1.25H9m2.75-6h6.5");
}
</style><g class="hntgybcog"><path class="lc0r_-bgm"/><path class="cere1k-8a"/></g>`,
		"fallback": "uix:onboarding-checklist",
	});
}

export default Component;
