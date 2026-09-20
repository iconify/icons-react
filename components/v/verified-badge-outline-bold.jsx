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
		"content": `<style>.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s3jkn35cv {
  d: path("M9 4h6l5 5v6l-5 5H9l-5 -5V9Z");
}

.yea3zvbmx {
  d: path("m8 12 3 3 5 -5");
}
</style><g class="s0phu2bbs"><path class="s3jkn35cv"/><path class="yea3zvbmx"/></g>`,
		"fallback": "iconmind:verified-badge-outline-bold",
	});
}

export default Component;
