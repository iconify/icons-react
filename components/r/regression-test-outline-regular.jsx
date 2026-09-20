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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.eq_vveyyh {
  d: path("m8 17 2 2 5 -5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s-p0nrawj {
  d: path("m8 10 2 2 5 -5");
}
</style><g class="nrj6p8qat"><path class="abnm6smsv"/><path class="s-p0nrawj"/><path class="eq_vveyyh"/></g>`,
		"fallback": "iconmind:regression-test-outline-regular",
	});
}

export default Component;
