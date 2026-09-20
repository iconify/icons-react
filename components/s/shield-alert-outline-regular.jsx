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
		"content": `<style>.eylqpv51p {
  d: path("M11 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uzmclv6tb {
  d: path("M12 8v3");
}

.ymp2b4b6u {
  d: path("M15 5h5v8l-8 8 -8 -8V5h5");
}
</style><g class="nrj6p8qat"><path class="ymp2b4b6u"/><path class="uzmclv6tb"/><path class="eylqpv51p"/></g>`,
		"fallback": "iconmind:shield-alert-outline-regular",
	});
}

export default Component;
