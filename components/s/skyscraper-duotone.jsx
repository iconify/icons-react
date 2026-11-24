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
		"content": `<style>.f3ks8zb6z {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 21h18M8 21V6a1 1 0 0 1 1-1h1V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h1a1 1 0 0 1 1 1v15M12 8h.01M12 12h.01M12 16h.01");
}

.ft5dv1b6b {
  fill: none;
}

.phd1nrdeh {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 5V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h1a1 1 0 0 1 1 1v15H8V6a1 1 0 0 1 1-1Z");
}
</style><g class="ft5dv1b6b"><path class="phd1nrdeh"/><path class="f3ks8zb6z"/></g>`,
		"fallback": "coolicons:skyscraper-duotone",
	});
}

export default Component;
