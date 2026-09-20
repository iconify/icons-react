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
		"content": `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.dktry7bqc {
  fill: currentColor;
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.fbde_z08y {
  fill: currentColor;
  d: path("M3 6h10l8 8 -8 8H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ha1vlxxyu {
  d: path("M12 14v2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sms0lfbha {
  d: path("M12 15h2.5");
}

.w3hyiobto {
  d: path("M3 6h10l8 8 -8 8H3Z");
}
</style><g class="s0phu2bbs"><path class="fbde_z08y"/><path class="dktry7bqc"/><path class="w3hyiobto"/><path class="bo51iypxr"/><path class="ha1vlxxyu"/><path class="sms0lfbha"/></g>`,
		"fallback": "iconmind:key-tag-duotone-bold",
	});
}

export default Component;
