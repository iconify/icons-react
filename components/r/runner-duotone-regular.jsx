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
		"content": `<style>.mzsthfbrb {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nzpsuduik {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.qm820vl4q {
  fill: currentColor;
  d: path("M10 8v8l4 -4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.x86sz9byo {
  d: path("M10 8v8l4 -4Z");
}
</style><g class="nrj6p8qat"><path class="mzsthfbrb"/><path class="qm820vl4q"/><path class="nzpsuduik"/><path class="x86sz9byo"/></g>`,
		"fallback": "iconmind:runner-duotone-regular",
	});
}

export default Component;
