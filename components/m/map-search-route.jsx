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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v3btvib_m {
  d: path("M12.969 19.654L9 18l-6 2.5V6l6-2.5L15 6l6-2.5v10.4");
}

.xflh-fb4z {
  d: path("M6 16c2-7 5.5-.5 9.5-8m-.25 9.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4 1.75L21 21");
}
</style><g class="ulnmmdpxh"><path class="v3btvib_m"/><path class="xflh-fb4z"/></g>`,
		"fallback": "uix-sharp:map-search-route",
	});
}

export default Component;
