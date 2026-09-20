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
		"content": `<style>.b4bbhnb2u {
  d: path("M14 4h4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V7l3 -3h4");
}

.li19mgbhm {
  d: path("M9 10v6");
}

.neq20cckj {
  d: path("M15 10v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t0-mwc0xy {
  d: path("M12 10v6");
}
</style><g class="nrj6p8qat"><path class="b4bbhnb2u"/><path class="li19mgbhm"/><path class="t0-mwc0xy"/><path class="neq20cckj"/></g>`,
		"fallback": "iconmind:mcp-capability-outline-regular",
	});
}

export default Component;
