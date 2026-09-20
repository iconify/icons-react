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
		"content": `<style>.eqqc-z5sv {
  d: path("M3 6.5h7");
}

.fqg-d6bob {
  d: path("M14 17.5h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.plef9ibei {
  d: path("M17.5 14v7");
}

.q88myjbfp {
  d: path("M6.5 3v7");
}

.va4lqxm9h {
  d: path("M13.5 17.5a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.zu4ajq05m {
  d: path("M2.5 6.5a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}
</style><g class="hntgybcog"><path class="zu4ajq05m"/><path class="eqqc-z5sv"/><path class="q88myjbfp"/><path class="va4lqxm9h"/><path class="fqg-d6bob"/><path class="plef9ibei"/></g>`,
		"fallback": "iconmind:region-pair-outline-thin",
	});
}

export default Component;
