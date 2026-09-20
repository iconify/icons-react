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
		"content": `<style>.areor3b-b {
  fill: currentColor;
  d: path("M5 6v13h13V6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.atq4odb0h {
  d: path("M11 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.cvere-4lf {
  d: path("m8 15 3 -3 3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ia5e4hb1l {
  fill: currentColor;
  d: path("M11 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lts0lwvni {
  d: path("M5 6v13h13V6Z");
}

.ohwuksb6c {
  d: path("M8 3h13v13");
}
</style><g class="hntgybcog"><path class="areor3b-b"/><path class="ia5e4hb1l"/><path class="lts0lwvni"/><path class="ohwuksb6c"/><path class="cvere-4lf"/><path class="atq4odb0h"/></g>`,
		"fallback": "iconmind:photography-duotone-thin",
	});
}

export default Component;
