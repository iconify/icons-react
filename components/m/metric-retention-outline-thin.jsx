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
		"content": `<style>.f73i47bnv {
  d: path("M9 11a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mke92-oua {
  d: path("M12 11h2.5");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.uzmclv6tb {
  d: path("M12 8v3");
}
</style><g class="hntgybcog"><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="f73i47bnv"/><path class="uzmclv6tb"/><path class="mke92-oua"/></g>`,
		"fallback": "iconmind:metric-retention-outline-thin",
	});
}

export default Component;
