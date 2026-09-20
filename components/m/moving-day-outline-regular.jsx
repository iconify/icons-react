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
		"content": `<style>.cphlk2bgi {
  d: path("M3 19v-7l6 -6 6 6v7Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t7ql4f28h {
  d: path("m19 10 2 2 -2 2");
}

.zy54a7bml {
  d: path("M17 12h4");
}
</style><g class="nrj6p8qat"><path class="cphlk2bgi"/><path class="zy54a7bml"/><path class="t7ql4f28h"/></g>`,
		"fallback": "iconmind:moving-day-outline-regular",
	});
}

export default Component;
