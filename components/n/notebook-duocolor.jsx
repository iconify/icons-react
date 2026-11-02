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
		"content": `<style>.jc_t_jbvp {
  d: path("M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm4-2v16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ra9bqhbdv {
  stroke-opacity: 0.4;
  d: path("M12 8h4m-4 4h4");
}
</style><g class="nrj6p8qat"><path class="ra9bqhbdv"/><path class="jc_t_jbvp"/></g>`,
		"fallback": "coolicons:notebook-duocolor",
	});
}

export default Component;
