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
		"content": `<style>.cfvl47bbd {
  d: path("M12 9.5L4.5 21.25M12 9.5l7.5 11.75M12 9.5v11.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kktn2dazm {
  d: path("M8.75 7a3.25 3.25 0 0 1 6.5 0ZM12 3.75v-1");
}

.tzdzl8b3m {
  width: 8px;
  height: 2.5px;
  x: 8px;
  y: 7px;
  rx: 1px;
}
</style><g class="hntgybcog"><path class="cfvl47bbd"/><rect class="tzdzl8b3m"/><path class="kktn2dazm"/></g>`,
		"fallback": "iconoven:survey-tripod",
	});
}

export default Component;
