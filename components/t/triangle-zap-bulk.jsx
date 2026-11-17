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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.q_ix0_b7m {
  d: path("M12.414 13H14a1.002 1.002 0 0 1 .707 1.707l-3 3a.999.999 0 1 1-1.414-1.414L11.586 15H10a1.002 1.002 0 0 1-.707-1.707l3-3a.999.999 0 1 1 1.414 1.414Z");
}

.q_ntab3ct {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m14.591 4.488l7 12A2.999 2.999 0 0 1 19 21H5a2.999 2.999 0 0 1-2.591-4.512l7-12a3 3 0 0 1 5.182 0");
}
</style><g class="cuyn6tgcc"><path class="q_ntab3ct"/><path class="q_ix0_b7m"/></g>`,
		"fallback": "coolicons:triangle-zap-bulk",
	});
}

export default Component;
