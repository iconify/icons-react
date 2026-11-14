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
		"content": `<style>.aywjn1ddl {
  fill: currentColor;
  d: path("M5.5 5.5h-1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h1Zm13 0h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-1Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rh4excbyl {
  d: path("M6 5.5h12A3.5 3.5 0 0 1 21.5 9v6a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 15V9A3.5 3.5 0 0 1 6 5.5");
}
</style><g class="hntgybcog"><path class="rh4excbyl"/><path class="aywjn1ddl"/></g>`,
		"fallback": "uix:pillarbox",
	});
}

export default Component;
