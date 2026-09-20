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
		"content": `<style>.bwqciab4n {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 16a5 5 0 0 1 10 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.eu2so4bxo {
  d: path("M7 16a5 5 0 0 1 10 0");
}

.fd_pyz_no {
  d: path("M12 5v4");
}

.htpewvs8p {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9.5 6.5 12 9l2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mbt4yzbhr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 19h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u-2slbcxk {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 5v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uh7f2-ziy {
  d: path("M9.5 6.5 12 9l2.5 -2.5");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="nrj6p8qat"><path class="bwqciab4n"/><path class="mbt4yzbhr"/><path class="u-2slbcxk"/><path class="htpewvs8p"/><path class="eu2so4bxo"/><path class="z9ittvbis"/><path class="fd_pyz_no"/><path class="uh7f2-ziy"/></g>`,
		"fallback": "iconmind:sun-set-duotone-regular",
	});
}

export default Component;
