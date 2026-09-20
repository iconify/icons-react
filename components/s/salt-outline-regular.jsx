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
		"content": `<style>.gcalxb98a {
  d: path("M8 13h8");
}

.ld2fqqd_p {
  d: path("M13 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xemj-cgvt {
  d: path("M9 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.zqbjehbqe {
  d: path("M8 21V11l2 -2h4l2 2v10Z");
}
</style><g class="nrj6p8qat"><path class="zqbjehbqe"/><path class="gcalxb98a"/><path class="xemj-cgvt"/><path class="ld2fqqd_p"/></g>`,
		"fallback": "iconmind:salt-outline-regular",
	});
}

export default Component;
