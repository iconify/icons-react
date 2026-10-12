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
		"content": `<style>.dlkoz2e6w {
  d: path("M6.5 14a5.5 5.5 0 0 1 11 0M12 14l1.5-2.6M12 17.75v3.5m-3 0h6");
}

.eovlm_9cu {
  width: 16.5px;
  height: 13px;
  x: 3.75px;
  y: 4.75px;
  rx: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="eovlm_9cu"/><path class="dlkoz2e6w"/></g>`,
		"fallback": "iconoven:tuner",
	});
}

export default Component;
