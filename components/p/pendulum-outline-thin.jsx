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

.nktjbrhkd {
  d: path("M4 4h16");
}

.rxj7i8-nj {
  d: path("M9 18a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.sy6d_ccqn {
  d: path("M19 16.12a14 14 0 0 1 -14 0");
}

.vt7vyubju {
  d: path("M12 4v11");
}
</style><g class="hntgybcog"><path class="nktjbrhkd"/><path class="vt7vyubju"/><path class="rxj7i8-nj"/><path class="sy6d_ccqn"/></g>`,
		"fallback": "iconmind:pendulum-outline-thin",
	});
}

export default Component;
