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
		"content": `<style>.a115tn9rl {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2-2V2.75M13.75 11l6-3.5m-6 5.5l6 3.5M12 14v7.25M10.25 13l-6 3.5m6-5.5l-6-3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j51f-ebgg {
  d: path("M6 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0");
}
</style><g class="hntgybcog"><path class="j51f-ebgg"/><path class="a115tn9rl"/></g>`,
		"fallback": "uix:vault-wheel",
	});
}

export default Component;
