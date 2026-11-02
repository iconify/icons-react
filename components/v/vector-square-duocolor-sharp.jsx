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
		"content": `<style>.c60-qib9z {
  stroke-opacity: 0.4;
  d: path("M3 3h4v4H3Zm14 0h4v4h-4Zm0 14h4v4h-4ZM3 17h4v4H3Z");
}

.f_tftibfv {
  d: path("M7 5h10m2 2v10m-2 2H7m-2-2V7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="c60-qib9z"/><path class="f_tftibfv"/></g>`,
		"fallback": "coolicons:vector-square-duocolor-sharp",
	});
}

export default Component;
