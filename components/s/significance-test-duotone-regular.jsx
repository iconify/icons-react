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

.f8tos7bqn {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 8v11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.famncybwn {
  d: path("M7 8v11");
}

.gaq4_offd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9.5 4.5 2 2L15 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ns4vl7b2c {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 21.5h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.q2_x01wuo {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M17 12v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rlkjycbtw {
  d: path("M17 12v7");
}

.rvwqxxbhr {
  d: path("m9.5 4.5 2 2L15 3");
}
</style><g class="nrj6p8qat"><path class="f8tos7bqn"/><path class="q2_x01wuo"/><path class="ns4vl7b2c"/><path class="gaq4_offd"/><path class="famncybwn"/><path class="rlkjycbtw"/><path class="du_3_4tit"/><path class="rvwqxxbhr"/></g>`,
		"fallback": "iconmind:significance-test-duotone-regular",
	});
}

export default Component;
