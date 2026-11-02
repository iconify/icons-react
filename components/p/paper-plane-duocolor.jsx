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

.pkb2k64ci {
  d: path("M12 6L6 8c-1.107.369-1.738 1.631-1 2l6 3l3 6c.369.738 1.631.107 2-1l4-12c.412-1.236-.764-2.412-2-2z");
}
</style><g class="nrj6p8qat"><path class="n-31ttcxg"/><path class="pkb2k64ci"/></g>`,
		"fallback": "coolicons:paper-plane-duocolor",
	});
}

export default Component;
