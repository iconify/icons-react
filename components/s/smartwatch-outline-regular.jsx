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
		"content": `<style>.jms1xqp8l {
  d: path("M9 3h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s5rwf4b1t {
  d: path("M7 8a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
}

.wtnr1t2-w {
  d: path("M9 21h6");
}
</style><g class="nrj6p8qat"><path class="s5rwf4b1t"/><path class="jms1xqp8l"/><path class="wtnr1t2-w"/></g>`,
		"fallback": "iconmind:smartwatch-outline-regular",
	});
}

export default Component;
