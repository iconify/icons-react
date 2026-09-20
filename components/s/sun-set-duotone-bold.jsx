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
		"content": `<style>.d5b4fcc2f {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 19h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.eu2so4bxo {
  d: path("M7 16a5 5 0 0 1 10 0");
}

.fb_14tbom {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 16a5 5 0 0 1 10 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fd_pyz_no {
  d: path("M12 5v4");
}

.ov7oc5bao {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 5v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u3-639g4d {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9.5 6.5 12 9l2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uh7f2-ziy {
  d: path("M9.5 6.5 12 9l2.5 -2.5");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="s0phu2bbs"><path class="fb_14tbom"/><path class="d5b4fcc2f"/><path class="ov7oc5bao"/><path class="u3-639g4d"/><path class="eu2so4bxo"/><path class="z9ittvbis"/><path class="fd_pyz_no"/><path class="uh7f2-ziy"/></g>`,
		"fallback": "iconmind:sun-set-duotone-bold",
	});
}

export default Component;
