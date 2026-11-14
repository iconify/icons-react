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
		"content": `<style>.lfwz8z9qo {
  d: path("M11 4.25h10v4.5H11Zm0 11h10v4.5H11Z");
}

.maw7r-3ly {
  d: path("M6 2.5v19");
}

.s7zwy_bcc {
  fill: currentColor;
  d: path("M4 6.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm0 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="maw7r-3ly"/><path class="s7zwy_bcc"/><path class="lfwz8z9qo"/></g>`,
		"fallback": "uix-sharp:timeline-vertical",
	});
}

export default Component;
