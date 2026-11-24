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
		"content": `<style>.efbd2xbhc {
  d: path("M3 21h18M8 21V6a1 1 0 0 1 1-1h1V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h1a1 1 0 0 1 1 1v15");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wp820wbfk {
  stroke-opacity: 0.4;
  d: path("M12 8h.01M12 12h.01M12 16h.01");
}
</style><g class="nrj6p8qat"><path class="wp820wbfk"/><path class="efbd2xbhc"/></g>`,
		"fallback": "coolicons:skyscraper-duocolor",
	});
}

export default Component;
