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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.kp_7cv0uf {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M17 17H2C1.4477 17 1 16.5523 1 16V4C1 3.4477 1.4477 3 2 3H3L17 17ZM6.6569 3L22 3C22.5523 3 23 3.4477 23 4L23 16C23 16.5523 22.5523 17 22 17L20.6569 17Z");
  stroke: none;
}

.vekz44bsy {
  d: path("M16 16H2V4H4M12 16V20M7 20H17M1.7071 1.7071L22.2929 22.2929");
}
</style><g class="gp_8x1bzb"><path class="kp_7cv0uf"/><path class="vekz44bsy"/></g>`,
		"fallback": "keyline-icons:monitor-off-sharp-two-tone",
	});
}

export default Component;
