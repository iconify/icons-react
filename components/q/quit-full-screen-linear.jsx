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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iwt0w8b9p {
  d: path("M2 14C5.77124 14 7.65685 14 8.82843 15.1716C10 16.3431 10 18.2288 10 22");
}

.jvzm0ac7t {
  d: path("M14 22C14 18.2288 14 16.3431 15.1716 15.1716C16.3431 14 18.2288 14 22 14");
}

.p2spj-b_a {
  d: path("M22 10C18.2288 10 16.3431 10 15.1716 8.82843C14 7.65685 14 5.77124 14 2");
}

.u3tqh8b-y {
  d: path("M2 10C5.77124 10 7.65685 10 8.82843 8.82843C10 7.65685 10 5.77124 10 2");
}
</style><g class="ipq1z-bjh"><path class="jvzm0ac7t"/><path class="iwt0w8b9p"/><path class="u3tqh8b-y"/><path class="p2spj-b_a"/></g>`,
		"fallback": "solar:quit-full-screen-linear",
	});
}

export default Component;
