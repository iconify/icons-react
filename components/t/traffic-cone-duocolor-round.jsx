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
		"content": `<style>.a517a_nqs {
  stroke-opacity: 0.4;
  d: path("M9 10h6m-8 5h10");
}

.as6fsnbrg {
  d: path("m5 20l6-15h2l6 15M3 20h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="a517a_nqs"/><path class="as6fsnbrg"/></g>`,
		"fallback": "coolicons:traffic-cone-duocolor-round",
	});
}

export default Component;
