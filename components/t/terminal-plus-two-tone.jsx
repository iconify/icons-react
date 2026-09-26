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
		"content": `<style>.mbnsw0b8c {
  stroke-opacity: 0.4;
  d: path("M18 19L11 19");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p1z12hbau {
  d: path("M2 5L8.5571 10.6204C8.7899 10.8199 8.7899 11.1801 8.5571 11.3796L2 17M19 5L19 11M16 8L22 8");
}
</style><g class="nrj6p8qat"><path class="p1z12hbau"/><path class="mbnsw0b8c"/></g>`,
		"fallback": "keyline-icons:terminal-plus-two-tone",
	});
}

export default Component;
