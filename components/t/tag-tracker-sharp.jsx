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
		"content": `<style>.he5c93l6x {
  d: path("M9.5 7.25v-2a2.5 2.5 0 0 1 5 0v2");
}

.pp3v195nj {
  cx: 12px;
  cy: 14px;
  r: 3px;
}

.r6uvok62f {
  cx: 12px;
  cy: 14px;
  r: 7.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="he5c93l6x"/><circle class="r6uvok62f"/><circle class="pp3v195nj"/></g>`,
		"fallback": "iconoven:tag-tracker-sharp",
	});
}

export default Component;
