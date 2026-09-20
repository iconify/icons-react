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
		"content": `<style>.f4naz_w9a {
  d: path("m9 5 3 3 3 -3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jotk81b5q {
  d: path("M12 2v6");
}

.ymudxkbnd {
  d: path("M14.5 11H17a3 3 0 0 1 3 3v4a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3v-3l4 -4h2.5");
}
</style><g class="hntgybcog"><path class="ymudxkbnd"/><path class="jotk81b5q"/><path class="f4naz_w9a"/></g>`,
		"fallback": "iconmind:pretrain-outline-thin",
	});
}

export default Component;
