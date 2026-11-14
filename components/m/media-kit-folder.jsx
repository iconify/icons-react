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

.jbqxwncnm {
  d: path("M12 9.25za1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-.5a1.5 1.5 0 0 1 1.5-1.5");
}

.xtir6tbak {
  d: path("M7.5 11a4.5 4.5 0 0 0 9 0M12 15.5v1.75");
}

.y8gikqbpr {
  d: path("M2.5 6A1.5 1.5 0 0 1 4 4.5h5l2 2h9A1.5 1.5 0 0 1 21.5 8v10.5A1.5 1.5 0 0 1 20 20H4a1.5 1.5 0 0 1-1.5-1.5Z");
}
</style><g class="hntgybcog"><path class="y8gikqbpr"/><path class="jbqxwncnm"/><path class="xtir6tbak"/></g>`,
		"fallback": "uix:media-kit-folder",
	});
}

export default Component;
