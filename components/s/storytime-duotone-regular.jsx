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
		"content": `<style>.j5_p9qdiu {
  d: path("M13 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.j9cys_e8h {
  d: path("M12 12Q9 9 3 9v10q6 0 9 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.povg_rnmz {
  fill: currentColor;
  d: path("M5 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vsaouab-m {
  fill: currentColor;
  d: path("M13 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vy55o7bfi {
  d: path("M5 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.w68exsf2w {
  d: path("M12 12q3 -3 9 -3v10q-6 0 -9 3");
}
</style><g class="nrj6p8qat"><path class="povg_rnmz"/><path class="vsaouab-m"/><path class="j9cys_e8h"/><path class="w68exsf2w"/><path class="vy55o7bfi"/><path class="j5_p9qdiu"/></g>`,
		"fallback": "iconmind:storytime-duotone-regular",
	});
}

export default Component;
