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
		"content": `<style>.d4dvqacly {
  d: path("M10 9a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.egganu2-z {
  d: path("m8 14 3 -3");
}

.gv3c38hmw {
  d: path("M16 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j9epvsb_e {
  d: path("m15 11 2 2");
}

.ns53blbaz {
  d: path("M3 16a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="hntgybcog"><path class="ns53blbaz"/><path class="d4dvqacly"/><path class="gv3c38hmw"/><path class="egganu2-z"/><path class="j9epvsb_e"/></g>`,
		"fallback": "iconmind:molecule-outline-thin",
	});
}

export default Component;
