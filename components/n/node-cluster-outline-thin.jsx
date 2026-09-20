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
		"content": `<style>.aq5i5tblx {
  d: path("M4 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.fhumgwb1z {
  d: path("m10.5 9.5 -3 3");
}

.fozhwebbv {
  d: path("M10 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ko65glbqt {
  d: path("m13.5 9.5 3 3");
}

.p83l94bht {
  d: path("M16 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.uzmclv6tb {
  d: path("M12 8v3");
}
</style><g class="hntgybcog"><path class="fozhwebbv"/><path class="aq5i5tblx"/><path class="p83l94bht"/><path class="uzmclv6tb"/><path class="fhumgwb1z"/><path class="ko65glbqt"/></g>`,
		"fallback": "iconmind:node-cluster-outline-thin",
	});
}

export default Component;
