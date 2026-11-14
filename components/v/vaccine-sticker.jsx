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
		"content": `<style>.h7nwsss6w {
  fill: currentColor;
  d: path("m11.25 7.25l1.176 2.382l2.628.382l-1.902 1.854l.449 2.618l-2.351-1.236l-2.351 1.236l.449-2.618l-1.902-1.854l2.628-.382Z");
}

.k-c0q7nvd {
  d: path("m20.5 15.5l-5 5L16 16Z");
}

.uk0t-uscc {
  d: path("M15.5 20.5a9 9 0 1 1 5-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="uk0t-uscc"/><path class="k-c0q7nvd"/><path class="h7nwsss6w"/></g>`,
		"fallback": "uix-sharp:vaccine-sticker",
	});
}

export default Component;
