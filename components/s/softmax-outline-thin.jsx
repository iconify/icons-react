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
		"content": `<style>.a9cczt5un {
  d: path("M10 8v12");
}

.d1du4rxru {
  d: path("M6 14v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j4if4rbfv {
  d: path("M18 14v6");
}

.jkuojibnm {
  d: path("M3 20h18");
}

.t3w_facee {
  d: path("M14 3v17");
}
</style><g class="hntgybcog"><path class="jkuojibnm"/><path class="d1du4rxru"/><path class="a9cczt5un"/><path class="t3w_facee"/><path class="j4if4rbfv"/></g>`,
		"fallback": "iconmind:softmax-outline-thin",
	});
}

export default Component;
