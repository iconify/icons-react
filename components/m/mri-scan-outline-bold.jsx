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
		"content": `<style>.c3a-odz8a {
  d: path("M12 18.5V21");
}

.dx5s6zbrc {
  d: path("M8 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s3lwy2n0b {
  d: path("M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.xslfg2evh {
  d: path("M6 21h12");
}
</style><g class="s0phu2bbs"><path class="s3lwy2n0b"/><path class="dx5s6zbrc"/><path class="xslfg2evh"/><path class="c3a-odz8a"/></g>`,
		"fallback": "iconmind:mri-scan-outline-bold",
	});
}

export default Component;
