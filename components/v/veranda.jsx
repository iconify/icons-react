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
		"content": `<style>.gq5igqbpf {
  d: path("M4 5.5v16m8-14v14m8-12v12M2.5 17h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sn5-1xbuk {
  fill: currentColor;
  d: path("m3.47 3.243l17.06 4.264a1.28 1.28 0 0 1 .97 1.243a.78.78 0 0 1-.97.757L3.47 5.243A1.28 1.28 0 0 1 2.5 4a.78.78 0 0 1 .97-.757");
}
</style><g class="hntgybcog"><path class="sn5-1xbuk"/><path class="gq5igqbpf"/></g>`,
		"fallback": "uix:veranda",
	});
}

export default Component;
