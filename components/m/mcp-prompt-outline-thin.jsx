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
		"content": `<style>.g31q_jb0h {
  d: path("M9 10v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pftwmngyp {
  d: path("M12 12h5");
}

.u5kuez3us {
  d: path("M15.5 6H18a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3v-4l5 -5h2.5");
}
</style><g class="hntgybcog"><path class="u5kuez3us"/><path class="g31q_jb0h"/><path class="pftwmngyp"/></g>`,
		"fallback": "iconmind:mcp-prompt-outline-thin",
	});
}

export default Component;
