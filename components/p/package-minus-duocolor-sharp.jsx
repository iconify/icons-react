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
		"content": `<style>.jdf5k2bjp {
  stroke-opacity: 0.4;
  d: path("M9 14h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s7e_ee__v {
  d: path("m5 6l1-2h12l2 4v12H4V8zM4 8h16");
}
</style><g class="nrj6p8qat"><path class="jdf5k2bjp"/><path class="s7e_ee__v"/></g>`,
		"fallback": "coolicons:package-minus-duocolor-sharp",
	});
}

export default Component;
