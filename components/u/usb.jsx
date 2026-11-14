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
		"content": `<style>.q8pmcdbfc {
  d: path("M10 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2-2V4M9.5 6.5l2.5-3l2.5 3M12 14l4.5-2.5v-2m-1.5-3h3v3h-3ZM12 12L7.5 9.5v-1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yqma2bwxo {
  d: path("M6 7a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><g class="ulnmmdpxh"><path class="q8pmcdbfc"/><path class="yqma2bwxo"/></g>`,
		"fallback": "uix-sharp:usb",
	});
}

export default Component;
