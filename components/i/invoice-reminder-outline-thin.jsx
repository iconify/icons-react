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
		"content": `<style>.csyuhrrop {
  d: path("M5 14V3h14v11");
}

.dlkpyyv9b {
  d: path("M9 6v6");
}

.e8hevq1kc {
  d: path("M9 7h5v4H9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nreq_9ofo {
  d: path("M2 11v10h20V11L12 21Z");
}
</style><g class="hntgybcog"><path class="nreq_9ofo"/><path class="csyuhrrop"/><path class="dlkpyyv9b"/><path class="e8hevq1kc"/></g>`,
		"fallback": "iconmind:invoice-reminder-outline-thin",
	});
}

export default Component;
