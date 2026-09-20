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
		"content": `<style>.gcrnhlesv {
  d: path("M12 10h3a3 3 0 0 1 3 3v4a3 3 0 0 1 -3 3H9a3 3 0 0 1 -3 -3v-4l3 -3Z");
}

.hr-ubj4jo {
  fill: currentColor;
  d: path("M12 10h3a3 3 0 0 1 3 3v4a3 3 0 0 1 -3 3H9a3 3 0 0 1 -3 -3v-4l3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ltriwmbuu {
  d: path("M8 10a4 4 0 0 1 8 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="hr-ubj4jo"/><path class="gcrnhlesv"/><path class="ltriwmbuu"/></g>`,
		"fallback": "iconmind:mcp-tool-permission-duotone-bold",
	});
}

export default Component;
