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
		"content": `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ha1vlxxyu {
  d: path("M12 14v2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sms0lfbha {
  d: path("M12 15h2.5");
}

.w3hyiobto {
  d: path("M3 6h10l8 8 -8 8H3Z");
}
</style><g class="nrj6p8qat"><path class="w3hyiobto"/><path class="bo51iypxr"/><path class="ha1vlxxyu"/><path class="sms0lfbha"/></g>`,
		"fallback": "iconmind:key-tag-outline-regular",
	});
}

export default Component;
