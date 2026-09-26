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
		"content": `<style>.dlkvehwsz {
  d: path("M2 6.8477L12 12M12 12L22 6.8477M7 4.4239L17 9.4239M12 12L12 22L2 17.1523L2 6.8477L12 2L22 6.8477L22 13M15.7071 18.7071L18 21L22.2929 16.7071");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.k1ypc5qnl {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M22 6.8477L22 13L16 13L13 13L13 22L12 22L2 17.1523L2 6.8477L12 12L22 6.8477Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="k1ypc5qnl"/><path class="dlkvehwsz"/></g>`,
		"fallback": "keyline-icons:package-check-sharp-fill",
	});
}

export default Component;
