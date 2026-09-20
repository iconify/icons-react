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

.o7ddovb7a {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m12 2 6 6v8l-6 6 -6 -6V8ZM6 8l6 6 6 -6m-6 6v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ryy49t53l {
  d: path("m12 2 6 6v8l-6 6 -6 -6V8ZM6 8l6 6 6 -6m-6 6v8");
}
</style><g class="hntgybcog"><path class="o7ddovb7a"/><path class="ryy49t53l"/></g>`,
		"fallback": "iconmind:three-d-generate-duotone-thin",
	});
}

export default Component;
