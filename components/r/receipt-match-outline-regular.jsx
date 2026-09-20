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
		"content": `<style>.eja300fqs {
  d: path("M11.5 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.fn5bvibgl {
  d: path("M8.5 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.jd_dotbnq {
  d: path("M6 2h12a2 2 0 0 1 2 2v15l-2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2V4a2 2 0 0 1 2 -2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="jd_dotbnq"/><path class="fn5bvibgl"/><path class="eja300fqs"/></g>`,
		"fallback": "iconmind:receipt-match-outline-regular",
	});
}

export default Component;
