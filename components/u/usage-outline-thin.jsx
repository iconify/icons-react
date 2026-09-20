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
		"content": `<style>.foi-0jb9y {
  d: path("M12 3h6a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V6a3 3 0 0 1 3 -3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tmjo8lbfp {
  d: path("M5.5 13h13");
}

.w-p5p7bpj {
  d: path("M5.5 16.5h13");
}
</style><g class="hntgybcog"><path class="foi-0jb9y"/><path class="tmjo8lbfp"/><path class="w-p5p7bpj"/></g>`,
		"fallback": "iconmind:usage-outline-thin",
	});
}

export default Component;
