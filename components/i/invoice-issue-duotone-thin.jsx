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

.e10hmz-ui {
  fill: currentColor;
  d: path("M2 11v10h20V11L12 21Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k0x593b0b {
  d: path("M13.5 6.5 16 9l-2.5 2.5");
}

.nreq_9ofo {
  d: path("M2 11v10h20V11L12 21Z");
}

.pty_wsbvs {
  d: path("M8 9h8");
}
</style><g class="hntgybcog"><path class="e10hmz-ui"/><path class="nreq_9ofo"/><path class="csyuhrrop"/><path class="pty_wsbvs"/><path class="k0x593b0b"/></g>`,
		"fallback": "iconmind:invoice-issue-duotone-thin",
	});
}

export default Component;
