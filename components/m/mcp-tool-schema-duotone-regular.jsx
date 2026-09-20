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
		"content": `<style>.cacmi2bmi {
  d: path("M13 3H9L6 6v15h12V8");
}

.ie2eafbvn {
  d: path("m11 9 -3 3 3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pux-8e3tz {
  fill: currentColor;
  d: path("M13 3H9L6 6v15h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ug4kkubvk {
  d: path("m13 9 3 3 -3 3");
}
</style><g class="nrj6p8qat"><path class="pux-8e3tz"/><path class="cacmi2bmi"/><path class="ie2eafbvn"/><path class="ug4kkubvk"/></g>`,
		"fallback": "iconmind:mcp-tool-schema-duotone-regular",
	});
}

export default Component;
