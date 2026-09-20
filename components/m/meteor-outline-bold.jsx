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
		"content": `<style>.am6m0sb5o {
  d: path("M16 4.5 19.5 8 16 11.5 12.5 8Z");
}

.jnvfxxwun {
  d: path("m7 21 5 -5");
}

.nkayykbew {
  d: path("m3 19 7 -7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="am6m0sb5o"/><path class="nkayykbew"/><path class="jnvfxxwun"/></g>`,
		"fallback": "iconmind:meteor-outline-bold",
	});
}

export default Component;
