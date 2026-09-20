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
		"content": `<style>.ffwaozrbk {
  d: path("M10 10h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iaozfqbuj {
  d: path("M14.5 4H17a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V8l4 -4h2.5");
}

.j4_olc1js {
  d: path("M10 14h4");
}

.pfpu_3ppl {
  d: path("M12 8v4");
}
</style><g class="hntgybcog"><path class="iaozfqbuj"/><path class="pfpu_3ppl"/><path class="ffwaozrbk"/><path class="j4_olc1js"/></g>`,
		"fallback": "iconmind:profile-diff-outline-thin",
	});
}

export default Component;
