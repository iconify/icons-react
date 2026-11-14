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
		"content": `<style>.b3-1egb3o {
  d: path("M10 9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm.5-1.25L8.75 6.5m3.75 1.25l1.75-1.25M9.5 12l-2-1.25M9 13.5H6.75m3 2l-2 1.5m5.75-5l2-1.25M14 13.5h2.25m-3 2l2 1.5");
}

.rc4hmcb7s {
  d: path("M9 13.5a2.5 3 0 1 0 5 0a2.5 3 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vqt4eodpw {
  d: path("M2.5 21.5c0-14.5 4.5-19 19-19c0 14.5-4.5 19-19 19Z");
}
</style><g class="ulnmmdpxh"><path class="vqt4eodpw"/><path class="rc4hmcb7s"/><path class="b3-1egb3o"/></g>`,
		"fallback": "uix-sharp:pest-plant",
	});
}

export default Component;
