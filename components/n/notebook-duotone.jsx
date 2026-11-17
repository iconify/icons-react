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
		"content": `<style>.chizk4bie {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm4-2v16m4-12h4m-4 4h4");
}

.ft5dv1b6b {
  fill: none;
}

.ot6a_qb2w {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2Z");
}
</style><g class="ft5dv1b6b"><path class="ot6a_qb2w"/><path class="chizk4bie"/></g>`,
		"fallback": "coolicons:notebook-duotone",
	});
}

export default Component;
