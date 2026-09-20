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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l0nc5l-lx {
  d: path("M6 15v3");
}

.l8dn9jbyp {
  d: path("M2 15h20");
}

.mq159kbup {
  d: path("M12 15v3");
}

.our76je3d {
  fill: currentColor;
  d: path("m12 8 4 4H8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.sfp0ggbri {
  d: path("M18 15v3");
}

.x963bozsy {
  d: path("m12 8 4 4H8Z");
}
</style><g class="hntgybcog"><path class="our76je3d"/><path class="l8dn9jbyp"/><path class="x963bozsy"/><path class="l0nc5l-lx"/><path class="mq159kbup"/><path class="sfp0ggbri"/></g>`,
		"fallback": "iconmind:stress-level-duotone-thin",
	});
}

export default Component;
