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
		"content": `<style>.h-d1yibvp {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 4 3 9l5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.icjgng4dc {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 9h14v11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pzovgl99o {
  d: path("M8 4 3 9l5 5");
}

.q5w-xob0a {
  d: path("M3 9h14v11");
}
</style><g class="hntgybcog"><path class="h-d1yibvp"/><path class="icjgng4dc"/><path class="pzovgl99o"/><path class="q5w-xob0a"/></g>`,
		"fallback": "iconmind:reply-duotone-thin",
	});
}

export default Component;
