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
		"content": `<style>.cmwdgpbrv {
  d: path("M2 17.5h20");
}

.jjxl5r6ig {
  d: path("M10 11.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pjoofgbkx {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9.5 4 12 6.5 14.5 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qlqs7mbtz {
  fill: currentColor;
  d: path("M10 11.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ttpxlcc5b {
  d: path("M12 3v3.5");
}

.vk4rqvbuy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 3v3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vrfij_bgi {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 17.5h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wfmdw-bov {
  d: path("M9.5 4 12 6.5 14.5 4");
}
</style><g class="nrj6p8qat"><path class="qlqs7mbtz"/><path class="vk4rqvbuy"/><path class="pjoofgbkx"/><path class="vrfij_bgi"/><path class="ttpxlcc5b"/><path class="wfmdw-bov"/><path class="jjxl5r6ig"/><path class="cmwdgpbrv"/></g>`,
		"fallback": "iconmind:scheduler-k8s-duotone-regular",
	});
}

export default Component;
