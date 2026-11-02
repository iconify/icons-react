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
		"content": `<style>.n-31ttcxg {
  stroke-opacity: 0.4;
  d: path("m11 13l3-3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rxkg3ygff {
  d: path("M12 6L6 8c-1.107.369-.476 2.262 1 3l2 1a6.7 6.7 0 0 1 3 3l1 2c.738 1.476 2.631 2.107 3 1l4-12c.412-1.236-.764-2.412-2-2z");
}
</style><g class="nrj6p8qat"><path class="n-31ttcxg"/><path class="rxkg3ygff"/></g>`,
		"fallback": "coolicons:paper-plane-duocolor-round",
	});
}

export default Component;
