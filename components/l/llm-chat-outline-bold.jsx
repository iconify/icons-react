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
		"content": `<style>.awi9-gbeo {
  d: path("M12 4h7a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7l3 -3Z");
}

.d46lplb8g {
  d: path("M7 16v5l5 -5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="awi9-gbeo"/><path class="d46lplb8g"/></g>`,
		"fallback": "iconmind:llm-chat-outline-bold",
	});
}

export default Component;
