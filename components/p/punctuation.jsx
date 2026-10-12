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
		"content": `<style>.frsmk1b8c {
  cx: 17px;
  cy: 19px;
  r: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l78ls8mni {
  cx: 7.5px;
  cy: 19px;
  r: 1.25px;
}

.x5vaj9bqz {
  d: path("M3.75 7.5a3.75 3.75 0 1 1 5.8 3.15c-1.2.8-2.05 1.7-2.05 3.1v1m9.5-11v11");
}
</style><g class="hntgybcog"><path class="x5vaj9bqz"/><circle class="l78ls8mni"/><circle class="frsmk1b8c"/></g>`,
		"fallback": "iconoven:punctuation",
	});
}

export default Component;
