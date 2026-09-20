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
		"content": `<style>.f8057zb1p {
  d: path("M18 12h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.pesxdybze {
  d: path("M3 12h7");
}

.s4ceatb9m {
  d: path("M13 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.xqeoz9oav {
  d: path("m9 17 2 2 4 -4");
}
</style><g class="hntgybcog"><path class="k6nj2fbya"/><path class="pesxdybze"/><path class="s4ceatb9m"/><path class="f8057zb1p"/><path class="xqeoz9oav"/></g>`,
		"fallback": "iconmind:mutation-test-outline-thin",
	});
}

export default Component;
