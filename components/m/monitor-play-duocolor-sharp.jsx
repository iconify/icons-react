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

.poo2p_bsk {
  d: path("M4 4h16v13H4Zm5 16h6");
}

.rxmqudbjz {
  stroke-opacity: 0.4;
  d: path("m10 7l5 3.5l-5 3.5Z");
}
</style><g class="nrj6p8qat"><path class="rxmqudbjz"/><path class="poo2p_bsk"/></g>`,
		"fallback": "coolicons:monitor-play-duocolor-sharp",
	});
}

export default Component;
