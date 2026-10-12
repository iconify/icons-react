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
		"content": `<style>.tadnhlzpy {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 14.5h15v6.75h-15zm1 0a6.5 6.5 0 0 1 13 0Z");
}

.twbmnxbig {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11.61 8.83l5.76-5.32l.37-.34l.34.37l.84.92l.34.37l-.37.34l-5.76 5.32l-.37.34l-.34-.37l-.84-.92l-.34-.37zM10.5 21.25v-3h3v3");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.wn_ge2p_i {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 17.75h.01m8.99 0h.01");
}
</style><g class="ux2u0rbkq"><path class="tadnhlzpy"/><path class="twbmnxbig"/><path class="wn_ge2p_i"/></g>`,
		"fallback": "iconoven:observatory-sharp",
	});
}

export default Component;
