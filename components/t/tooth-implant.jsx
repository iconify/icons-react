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
		"content": `<style>.bqib3eblp {
  width: 3px;
  height: 2.5px;
  x: 10.5px;
  y: 10px;
  rx: 0.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rmyoq2b1z {
  d: path("M6.75 4.5c0-1 .8-1.75 1.75-1.75h7c1 0 1.75.75 1.75 1.75v2.75C17.25 8.75 16 10 14.5 10h-5C8 10 6.75 8.75 6.75 7.25Z");
}

.whocsmb_c {
  d: path("M9.25 12.5h5.5l-1 7.75a1.5 1.5 0 0 1-1.5 1h-.5a1.5 1.5 0 0 1-1.5-1Zm1 3h3.5m-3 3h2.5");
}
</style><g class="hntgybcog"><path class="rmyoq2b1z"/><rect class="bqib3eblp"/><path class="whocsmb_c"/></g>`,
		"fallback": "iconoven:tooth-implant",
	});
}

export default Component;
