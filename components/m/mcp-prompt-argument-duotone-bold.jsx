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
		"content": `<style>.kq4n_h3_b {
  fill: currentColor;
  d: path("M14 5h4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8l3 -3h4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s_qzku-2n {
  d: path("M14 5h4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8l3 -3h4");
}

.s09hy0b0y {
  d: path("M7 11h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wv2epfb5m {
  d: path("M14 15h3");
}

.xq_z6abtw {
  d: path("M7 15h4");
}
</style><g class="s0phu2bbs"><path class="kq4n_h3_b"/><path class="s_qzku-2n"/><path class="s09hy0b0y"/><path class="xq_z6abtw"/><path class="wv2epfb5m"/></g>`,
		"fallback": "iconmind:mcp-prompt-argument-duotone-bold",
	});
}

export default Component;
