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
		"content": `<style>.a046ttf-b {
  d: path("M4 13a8 8 0 1 0 16 0a8 8 0 1 0-16 0M9.5 2.5h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t88j269os {
  d: path("M12 9a4 4 0 1 1-4 4");
}

.ypn1qlbeb {
  d: path("M6.75 14.25L8 13l1.25 1.25");
}
</style><g class="hntgybcog"><path class="a046ttf-b"/><path class="t88j269os"/><path class="ypn1qlbeb"/></g>`,
		"fallback": "uix:timer-reset",
	});
}

export default Component;
