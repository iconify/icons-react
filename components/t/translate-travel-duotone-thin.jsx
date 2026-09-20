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
		"content": `<style>.cgy8y9byr {
  d: path("M17 17v3l3 -3");
}

.chzquvbpx {
  fill: currentColor;
  d: path("M14 9h8v8h-8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.g_pok7b1i {
  d: path("M5 13v3l3 -3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.is6npyb7a {
  d: path("M2 5h8v8H2Z");
}

.ou1kg9jzg {
  fill: currentColor;
  d: path("M2 5h8v8H2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.uqbiloglf {
  d: path("M14 9h8v8h-8Z");
}
</style><g class="hntgybcog"><path class="ou1kg9jzg"/><path class="chzquvbpx"/><path class="is6npyb7a"/><path class="g_pok7b1i"/><path class="uqbiloglf"/><path class="cgy8y9byr"/></g>`,
		"fallback": "iconmind:translate-travel-duotone-thin",
	});
}

export default Component;
