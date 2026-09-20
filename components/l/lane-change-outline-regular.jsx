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
		"content": `<style>.codat6b9f {
  d: path("M11.5 6H15v3.5");
}

.lwdt7zb5f {
  d: path("M4 2v20");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pk1ekjvnl {
  d: path("M20 2v20");
}

.xtovmhbxk {
  d: path("M9 19v-7l6 -6");
}
</style><g class="nrj6p8qat"><path class="lwdt7zb5f"/><path class="pk1ekjvnl"/><path class="xtovmhbxk"/><path class="codat6b9f"/></g>`,
		"fallback": "iconmind:lane-change-outline-regular",
	});
}

export default Component;
