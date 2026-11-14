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
		"content": `<style>.eww5_79qm {
  d: path("M6 9.75h5.5v5.5H6Zm8.25.5H17m-1.75 8.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm1-2.25l4.5 4.5");
}

.n1_ihabqt {
  d: path("M12.8 20.5H2.5v-18h18v10.3M6 6.5h11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n1_ihabqt"/><path class="eww5_79qm"/></g>`,
		"fallback": "uix-sharp:news-feed-off",
	});
}

export default Component;
