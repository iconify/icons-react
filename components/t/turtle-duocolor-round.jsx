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

.v22nukbrd {
  d: path("M3 14a7 7 0 0 1 14 0Zm12.745-4H19a2 2 0 1 1 0 4h-2a7 7 0 0 0-1.255-4M8 11h4m-4 0L6.476 7.952M12 11l1.524-3.048");
}

.zcb15ixya {
  stroke-opacity: 0.4;
  d: path("M3 14v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-3m8 0v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-3");
}
</style><g class="nrj6p8qat"><path class="zcb15ixya"/><path class="v22nukbrd"/></g>`,
		"fallback": "coolicons:turtle-duocolor-round",
	});
}

export default Component;
