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
		"content": `<style>.ffw_pwyfz {
  d: path("M12.62 3.5a7 7 0 1 1 -5.24 0");
}

.kfdmhd64i {
  d: path("m15 15 6 6");
}

.lyy2bnbbp {
  d: path("m10 7 4 4");
}

.mrbwrkdfc {
  d: path("m14 7 -4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ymk1v8j2l {
  d: path("m6.5 10 2 2L11 9.5");
}
</style><g class="nrj6p8qat"><path class="ffw_pwyfz"/><path class="kfdmhd64i"/><path class="ymk1v8j2l"/><path class="lyy2bnbbp"/><path class="mrbwrkdfc"/></g>`,
		"fallback": "iconmind:retrieval-eval-outline-regular",
	});
}

export default Component;
