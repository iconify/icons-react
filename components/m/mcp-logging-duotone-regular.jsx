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

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pgcrrz33a {
  d: path("m10 13.5 2 2 2 -2");
}

.pty_wsbvs {
  d: path("M8 9h8");
}

.pux-8e3tz {
  fill: currentColor;
  d: path("M13 3H9L6 6v15h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="pux-8e3tz"/><path class="cacmi2bmi"/><path class="pty_wsbvs"/><path class="pgcrrz33a"/></g>`,
		"fallback": "iconmind:mcp-logging-duotone-regular",
	});
}

export default Component;
