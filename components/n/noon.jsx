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
		"content": `<style>.gbce36vij {
  d: path("M19.75 12h1.5m-3.77 5.48l1.06 1.06M12 19.75v1.5m-5.48-3.77l-1.06 1.06M4.25 12h-1.5m3.77-5.48L5.46 5.46M12 4.25v-1.5m5.48 3.77l1.06-1.06M12 12V8.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xrii8hxli {
  cx: 12px;
  cy: 12px;
  r: 4.75px;
}
</style><g class="hntgybcog"><circle class="xrii8hxli"/><path class="gbce36vij"/></g>`,
		"fallback": "iconoven:noon",
	});
}

export default Component;
