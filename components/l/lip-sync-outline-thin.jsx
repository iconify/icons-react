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
		"content": `<style>.fijjj9b9u {
  d: path("M20.54 6.46a5 5 0 0 1 0 7.08");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iprvt7beg {
  d: path("M19.12 7.88a3 3 0 0 1 0 4.24");
}

.ydk-7sp0t {
  d: path("M14.5 10a5.5 5.5 0 0 1 -11 0");
}
</style><g class="hntgybcog"><path class="ydk-7sp0t"/><path class="iprvt7beg"/><path class="fijjj9b9u"/></g>`,
		"fallback": "iconmind:lip-sync-outline-thin",
	});
}

export default Component;
