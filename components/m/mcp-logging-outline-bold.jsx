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

.pgcrrz33a {
  d: path("m10 13.5 2 2 2 -2");
}

.pty_wsbvs {
  d: path("M8 9h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="cacmi2bmi"/><path class="pty_wsbvs"/><path class="pgcrrz33a"/></g>`,
		"fallback": "iconmind:mcp-logging-outline-bold",
	});
}

export default Component;
