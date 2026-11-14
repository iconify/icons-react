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
		"content": `<style>.k1a5m2bta {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 19.5L12 12m4.5-7.75l.261.653a1.5 1.5 0 0 0 .836.836L18.25 6a.539.539 0 0 1 0 1l-.653.261a1.5 1.5 0 0 0-.836.836l-.261.653a.539.539 0 0 1-1 0l-.261-.653a1.5 1.5 0 0 0-.836-.836L13.75 7a.539.539 0 0 1 0-1l.653-.261a1.5 1.5 0 0 0 .836-.836l.261-.653a.539.539 0 0 1 1 0M20 13.5h.01M9 4.5h.01");
}
</style><path class="k1a5m2bta"/>`,
		"fallback": "uix:selection-magic-wand",
	});
}

export default Component;
