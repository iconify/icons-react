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
		"content": `<style>.hb1ohtb0a {
  d: path("m14 11l-3 3m-4-1l2 6l3-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.quub31myw {
  stroke-opacity: 0.4;
  d: path("m11 14l6 6l4-16l-18 7l4 2");
}
</style><g class="nrj6p8qat"><path class="quub31myw"/><path class="hb1ohtb0a"/></g>`,
		"fallback": "coolicons:telegram-duocolor",
	});
}

export default Component;
