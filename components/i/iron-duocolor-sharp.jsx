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
		"content": `<style>.c7yn3pb3u {
  d: path("m3 18l7-7h11v7z");
}

.eaj0h0b8p {
  stroke-opacity: 0.4;
  d: path("M21 11V6h-6v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="eaj0h0b8p"/><path class="c7yn3pb3u"/></g>`,
		"fallback": "coolicons:iron-duocolor-sharp",
	});
}

export default Component;
