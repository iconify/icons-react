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
		"content": `<style>.e2aybg2ii {
  d: path("M14.5 12H18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rxj7i8-nj {
  d: path("M9 18a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.vt7vyubju {
  d: path("M12 4v11");
}

.vymzkpbdz {
  d: path("M14.5 8H18");
}
</style><g class="hntgybcog"><path class="rxj7i8-nj"/><path class="vt7vyubju"/><path class="vymzkpbdz"/><path class="e2aybg2ii"/></g>`,
		"fallback": "iconmind:temperature-outline-thin",
	});
}

export default Component;
