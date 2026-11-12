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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.meafjacfv {
  stroke-linejoin: round;
  d: path("M5.28571 10L7 8L5.28571 6");
}

.ofbo3go0r {
  d: path("M21 6L13 6");
}

.owrhvnb3b {
  d: path("M21 18H13");
}

.s8om3o5nq {
  d: path("M21 14L13 14");
}

.tv7mnccnu {
  stroke-linejoin: round;
  d: path("M5.28571 18L7 16L5.28571 14");
}

.z96w33bzg {
  d: path("M21 10L13 10");
}
</style><g class="ipq1z-bjh"><path class="ofbo3go0r"/><path class="z96w33bzg"/><path class="s8om3o5nq"/><path class="owrhvnb3b"/><path class="tv7mnccnu"/><path class="meafjacfv"/></g>`,
		"fallback": "solar:list-collapse-linear",
	});
}

export default Component;
