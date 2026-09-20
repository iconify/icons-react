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
		"content": `<style>.cbc39pbyz {
  d: path("M8 6v15");
}

.h3kp1aciy {
  d: path("M4 8a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t9co17b-n {
  d: path("M9.5 21a4.5 4.5 0 0 1 9 0");
}

.wgkctvbsy {
  fill: currentColor;
  d: path("M12 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yuybrcb9z {
  d: path("M12 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.yvmiiclen {
  fill: currentColor;
  d: path("M4 8a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="yvmiiclen"/><path class="wgkctvbsy"/><path class="h3kp1aciy"/><path class="cbc39pbyz"/><path class="yuybrcb9z"/><path class="t9co17b-n"/></g>`,
		"fallback": "iconmind:passport-control-duotone-regular",
	});
}

export default Component;
