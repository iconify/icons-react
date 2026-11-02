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
		"content": `<style>.kyxgkzbxh {
  d: path("M12 4h8v5M9 20H4V4h8M4 9h16M4 15h5m3-11v5");
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
</style><g class="nrj6p8qat"><path class="yv0shlb-w"/><path class="kyxgkzbxh"/></g>`,
		"fallback": "coolicons:table-minus-corner-duocolor-sharp",
	});
}

export default Component;
