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
		"content": `<style>.hk697hhuu {
  d: path("M15.38 6.75a8 8 0 1 1 -6.76 0");
}

.jlojnsdlu {
  d: path("M11 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.jms1xqp8l {
  d: path("M9 3h6");
}

.n-fiqpbfy {
  d: path("M12 10v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yazo7scbq {
  d: path("M12 3v3");
}
</style><g class="nrj6p8qat"><path class="hk697hhuu"/><path class="yazo7scbq"/><path class="jms1xqp8l"/><path class="n-fiqpbfy"/><path class="jlojnsdlu"/></g>`,
		"fallback": "iconmind:time-alert-outline-regular",
	});
}

export default Component;
