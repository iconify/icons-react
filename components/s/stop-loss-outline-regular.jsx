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
		"content": `<style>.af7iv3n-p {
  d: path("M12 2v2.5");
}

.iiquwwbvb {
  d: path("M5 6.5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2V16a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.jnf_2db5t {
  d: path("M12 18v3");
}

.mvm7r4bea {
  d: path("M8 14h8");
}

.n_1n94xtx {
  d: path("M9.5 8.5 12 11l2.5 -2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="af7iv3n-p"/><path class="iiquwwbvb"/><path class="jnf_2db5t"/><path class="n_1n94xtx"/><path class="mvm7r4bea"/></g>`,
		"fallback": "iconmind:stop-loss-outline-regular",
	});
}

export default Component;
