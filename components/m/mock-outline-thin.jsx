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
		"content": `<style>.eud-3ptuk {
  d: path("M15 12h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kvnpcyz2l {
  d: path("M15 18h7");
}

.n6ndjw6jf {
  d: path("M4 9h7");
}

.o9y-9tbqv {
  d: path("M15 6h7");
}

.y76hd_85j {
  d: path("M2 6a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="y76hd_85j"/><path class="n6ndjw6jf"/><path class="o9y-9tbqv"/><path class="eud-3ptuk"/><path class="kvnpcyz2l"/></g>`,
		"fallback": "iconmind:mock-outline-thin",
	});
}

export default Component;
