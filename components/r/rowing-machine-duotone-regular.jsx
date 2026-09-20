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
		"content": `<style>.c1g0k8fft {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 15h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ekfvrj1wr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 7v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gstzuxb9r {
  d: path("M5 7v4");
}

.lk97rhbbb {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 12v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rrzohjbez {
  d: path("M12 12v3");
}

.wggowmhtc {
  d: path("M5 9h4");
}

.wnbj5_30e {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 12h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x1_r36phd {
  d: path("M9 12h6");
}

.yngda3bvc {
  d: path("M3 15h18");
}

.ythi7dbly {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 9h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="c1g0k8fft"/><path class="wnbj5_30e"/><path class="lk97rhbbb"/><path class="ekfvrj1wr"/><path class="ythi7dbly"/><path class="yngda3bvc"/><path class="x1_r36phd"/><path class="rrzohjbez"/><path class="gstzuxb9r"/><path class="wggowmhtc"/></g>`,
		"fallback": "iconmind:rowing-machine-duotone-regular",
	});
}

export default Component;
