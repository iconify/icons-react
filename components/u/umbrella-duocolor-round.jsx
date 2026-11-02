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
		"content": `<style>.kol7kqbto {
  stroke-opacity: 0.4;
  d: path("M12 12v7a2 2 0 1 0 4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wmm3s4_zx {
  d: path("M3 12a9 9 0 0 1 18 0z");
}
</style><g class="nrj6p8qat"><path class="kol7kqbto"/><path class="wmm3s4_zx"/></g>`,
		"fallback": "coolicons:umbrella-duocolor-round",
	});
}

export default Component;
