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
		"content": `<style>.b0695_86h {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 19h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jwnes9bsk {
  d: path("M8 19h8");
}

.jzeve79sx {
  fill: currentColor;
  d: path("M10 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.o5n4i5bsy {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 7h18M3 7a3 3 0 0 0 6 0m6 0a3 3 0 0 0 6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ujz4z0bsw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 7v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x4q3oe16k {
  d: path("M3 7h18M3 7a3 3 0 0 0 6 0m6 0a3 3 0 0 0 6 0");
}

.x5li7lwaz {
  d: path("M12 7v12");
}

.ymw3aibdo {
  d: path("M10 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="jzeve79sx"/><path class="o5n4i5bsy"/><path class="ujz4z0bsw"/><path class="b0695_86h"/><path class="x4q3oe16k"/><path class="x5li7lwaz"/><path class="jwnes9bsk"/><path class="ymw3aibdo"/></g>`,
		"fallback": "iconmind:net-worth-duotone-bold",
	});
}

export default Component;
