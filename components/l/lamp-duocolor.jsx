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
		"content": `<style>.cn8axvbpo {
  stroke-opacity: 0.4;
  d: path("M12 11v6m-4 2a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2");
}

.hr37iinay {
  d: path("M12 11H7c-.919 0-1.46-1.081-1-2l2-4c.613-1.226 1.387-2 2-2h4c.613 0 1.387.774 2 2l2 4c.46.919-.081 2-1 2z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="cn8axvbpo"/><path class="hr37iinay"/></g>`,
		"fallback": "coolicons:lamp-duocolor",
	});
}

export default Component;
