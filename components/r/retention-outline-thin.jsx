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
		"content": `<style>.cjsg0ab2y {
  d: path("M2 20h20");
}

.cub64ac5a {
  d: path("M19 13v7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ler50rfbf {
  d: path("M9 8v12");
}

.r3faxubne {
  d: path("M4 4v16");
}

.siun7_bal {
  d: path("M14 11v9");
}
</style><g class="hntgybcog"><path class="r3faxubne"/><path class="ler50rfbf"/><path class="siun7_bal"/><path class="cub64ac5a"/><path class="cjsg0ab2y"/></g>`,
		"fallback": "iconmind:retention-outline-thin",
	});
}

export default Component;
