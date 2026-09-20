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
		"content": `<style>.e4rbzsbiw {
  d: path("M3 11a9 9 0 0 1 18 0Z");
}

.mft5sm3ri {
  fill: currentColor;
  d: path("M3 11a9 9 0 0 1 18 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sg8usjbiz {
  d: path("M9 13v6");
}

.u2vvzw7_k {
  d: path("M15 13v6");
}

.wuk2mlziz {
  d: path("M7 19h10");
}
</style><g class="nrj6p8qat"><path class="mft5sm3ri"/><path class="e4rbzsbiw"/><path class="sg8usjbiz"/><path class="u2vvzw7_k"/><path class="wuk2mlziz"/></g>`,
		"fallback": "iconmind:mushroom-duotone-regular",
	});
}

export default Component;
