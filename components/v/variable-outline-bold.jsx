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
		"content": `<style>.gq7a04b8r {
  d: path("M14 14h5");
}

.n7sdxmqqs {
  d: path("M14 11h7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wf6zu9b6f {
  d: path("M2 9a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="wf6zu9b6f"/><path class="n7sdxmqqs"/><path class="gq7a04b8r"/></g>`,
		"fallback": "iconmind:variable-outline-bold",
	});
}

export default Component;
