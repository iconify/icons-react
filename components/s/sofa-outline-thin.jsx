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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oqj-o0b2r {
  d: path("M5 14h14");
}

.owfn5sxxm {
  d: path("M12 8v6");
}

.v6idbfb-b {
  d: path("M5 19V8h14v11");
}

.x7yzkkbqs {
  d: path("M2 19v-5h3");
}

.xroalcbzh {
  d: path("M22 19v-5h-3");
}
</style><g class="hntgybcog"><path class="v6idbfb-b"/><path class="oqj-o0b2r"/><path class="owfn5sxxm"/><path class="x7yzkkbqs"/><path class="xroalcbzh"/></g>`,
		"fallback": "iconmind:sofa-outline-thin",
	});
}

export default Component;
