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
		"content": `<style>.du_3_4tit {
  d: path("M4 21.5h16");
}

.famncybwn {
  d: path("M7 8v11");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rlkjycbtw {
  d: path("M17 12v7");
}

.rvwqxxbhr {
  d: path("m9.5 4.5 2 2L15 3");
}
</style><g class="nrj6p8qat"><path class="famncybwn"/><path class="rlkjycbtw"/><path class="du_3_4tit"/><path class="rvwqxxbhr"/></g>`,
		"fallback": "iconmind:significance-test-outline-regular",
	});
}

export default Component;
