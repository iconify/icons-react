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
		"content": `<style>.eh4_3ebbt {
  d: path("M4 6.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oa7ibkb8p {
  d: path("M14.32 10a5.5 5.5 0 1 1 -4.64 0");
}

.v_i-xnbbq {
  d: path("M16 6.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.w57l-wb8f {
  d: path("M10 6.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="nrj6p8qat"><path class="eh4_3ebbt"/><path class="w57l-wb8f"/><path class="v_i-xnbbq"/><path class="oa7ibkb8p"/></g>`,
		"fallback": "iconmind:task-queue-agent-outline-regular",
	});
}

export default Component;
