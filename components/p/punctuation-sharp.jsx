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

.l78ls8mni {
  cx: 7.5px;
  cy: 19px;
  r: 1.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zc07nibya {
  d: path("M3.75 7.5a3.75 3.75 0 1 1 5.8 3.15L7.5 12.017v2.733m9.5-11v11");
}
</style><g class="x2cwu0gfd"><path class="zc07nibya"/><circle class="l78ls8mni"/><circle class="frsmk1b8c"/></g>`,
		"fallback": "iconoven:punctuation-sharp",
	});
}

export default Component;
