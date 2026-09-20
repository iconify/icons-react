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

.l517yxbln {
  d: path("M12 9v6");
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

.x1_r36phd {
  d: path("M9 12h6");
}
</style><g class="nrj6p8qat"><path class="pux-8e3tz"/><path class="cacmi2bmi"/><path class="l517yxbln"/><path class="x1_r36phd"/></g>`,
		"fallback": "iconmind:mcp-resource-add-duotone-regular",
	});
}

export default Component;
