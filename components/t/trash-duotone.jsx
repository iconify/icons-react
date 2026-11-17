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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.nom-c5bhu {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18 6v13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Z");
}

.vq-g6jbwe {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6M4 6h16M8 6V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1");
}
</style><g class="ft5dv1b6b"><path class="nom-c5bhu"/><path class="vq-g6jbwe"/></g>`,
		"fallback": "coolicons:trash-duotone",
	});
}

export default Component;
