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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.txp_okbgk {
  stroke-opacity: 0.4;
  d: path("M4 18v-6l2-4h12l2 4v6zm2 0h2v2H6Zm10 0h2v2h-2ZM3 12h18");
}

.uf7ef_qpg {
  d: path("M10 5h4M8 15h.01M16 15h.01");
}
</style><g class="nrj6p8qat"><path class="txp_okbgk"/><path class="uf7ef_qpg"/></g>`,
		"fallback": "coolicons:taxi-duocolor-sharp",
	});
}

export default Component;
