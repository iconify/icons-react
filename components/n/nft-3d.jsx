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
		"content": `<style>.lo0sj04xl {
  d: path("m6.5 9l5.5 3l5.5-3M12 12v6.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ysktjc-qn {
  d: path("m12 2.5l8.5 4.75v9.5L12 21.5l-8.5-4.75v-9.5Z");
}
</style><g class="ulnmmdpxh"><path class="ysktjc-qn"/><path class="lo0sj04xl"/></g>`,
		"fallback": "uix-sharp:nft-3d",
	});
}

export default Component;
