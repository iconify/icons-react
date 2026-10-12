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
		"content": `<style>.b7b96hqda {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 12H14M2.75 16.75h11.5v4.5H2.75z");
}

.gxj0gh4aj {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.5 5h.01");
}

.izktscztu {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 19h3");
}

.np6v2ksmb {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 5h7M2.75 9.75h15v4.5h-15z");
}

.tfmmtps3w {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h18.5v4.5H2.75z");
}

.ufcahkbfz {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.5 19h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.y0ccz-u_r {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.5 12h.01");
}
</style><g class="ux2u0rbkq"><path class="tfmmtps3w"/><path class="gxj0gh4aj"/><path class="np6v2ksmb"/><path class="y0ccz-u_r"/><path class="b7b96hqda"/><path class="ufcahkbfz"/><path class="izktscztu"/></g>`,
		"fallback": "iconoven:leaderboard-sharp",
	});
}

export default Component;
