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
		"content": `<style>.g04xkmgbk {
  d: path("M12.54 7.56a6 6 0 1 1 -5.08 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qcu95-bhb {
  d: path("M15 4h4l-4 4h4");
}
</style><g class="hntgybcog"><path class="g04xkmgbk"/><path class="qcu95-bhb"/></g>`,
		"fallback": "iconmind:sleeper-outline-thin",
	});
}

export default Component;
