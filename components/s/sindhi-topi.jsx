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
		"content": `<style>.nzb9fmbyo {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8.5c0-1.25 3.4-2.25 7.5-2.25s7.5 1 7.5 2.25V18a1.25 1.25 0 0 1-1.25 1.25H14.5V15.5a2.5 2.5 0 0 0-5 0v3.75H5.75A1.25 1.25 0 0 1 4.5 18Z");
}

.qcpfwcbkw {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 14h.01M17 14h.01M7 17h.01M17 17h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ya0otcbgd {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8.5c0 1.25 3.4 2.25 7.5 2.25s7.5-1 7.5-2.25");
}
</style><g class="y9tr6bcfx"><path class="nzb9fmbyo"/><path class="ya0otcbgd"/><path class="qcpfwcbkw"/></g>`,
		"fallback": "iconoven:sindhi-topi",
	});
}

export default Component;
