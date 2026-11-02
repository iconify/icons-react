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
		"content": `<style>.fiz-p3b0n {
  d: path("M12 4h6a2 2 0 0 1 2 2v3M9 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M4 9h16M4 15h5m3-11v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yv0shlb-w {
  stroke-opacity: 0.4;
  d: path("M13 16h8");
}
</style><g class="nrj6p8qat"><path class="yv0shlb-w"/><path class="fiz-p3b0n"/></g>`,
		"fallback": "coolicons:table-minus-corner-duocolor",
	});
}

export default Component;
