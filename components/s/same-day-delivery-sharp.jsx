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
		"content": `<style>.ctm120t1a {
  d: path("M2.75 10.75h11.5v10.5H2.75zm5.75 0v3");
}

.dpvierh-z {
  d: path("M17.25 3.25v.25m0 7.25v-.25M21 7h-.25M13.5 7h.25m6.15-2.65l-.18.18M14.6 9.65l.18-.18m5.12.18l-.18-.18M14.6 4.35l.18.18");
}

.joko_go6x {
  cx: 17.25px;
  cy: 7px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ctm120t1a"/><circle class="joko_go6x"/><path class="dpvierh-z"/></g>`,
		"fallback": "iconoven:same-day-delivery-sharp",
	});
}

export default Component;
