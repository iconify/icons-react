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

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ug4kkubvk {
  d: path("m13 9 3 3 -3 3");
}
</style><g class="s0phu2bbs"><path class="cacmi2bmi"/><path class="ie2eafbvn"/><path class="ug4kkubvk"/></g>`,
		"fallback": "iconmind:mcp-tool-schema-outline-bold",
	});
}

export default Component;
