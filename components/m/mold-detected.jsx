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
		"content": `<style>.gvtgd0vwa {
  fill: currentColor;
  d: path("M4.5 6.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm6.25-.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM4.5 12A1.25 1.25 0 1 0 7 12a1.25 1.25 0 1 0-2.5 0Zm4.75-1.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm6.25-3a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vtt342xpx {
  d: path("M2.5 21.5v-19h19");
}

.ysmxbwq8a {
  d: path("m18 14l4 7.5h-8Zm0 3.25v1M18 20h.01");
}
</style><g class="ulnmmdpxh"><path class="vtt342xpx"/><path class="gvtgd0vwa"/><path class="ysmxbwq8a"/></g>`,
		"fallback": "uix-sharp:mold-detected",
	});
}

export default Component;
