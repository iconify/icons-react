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
		"content": `<style>.m1_zxnbgm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 21.5l5-19m11.302 8.749L16.5 2.5M12 14V5.5m-3 3l3-3l3 3m2.233 6.859l.059-1.296h1.416l.059 1.296l1.136.656l1.152-.597l.709 1.227l-1.093.699v1.312l1.093.699l-.709 1.227l-1.152-.597l-1.136.656l-.059 1.296h-1.416l-.059-1.296l-1.136-.656l-1.152.597l-.709-1.227l1.093-.699v-1.312l-1.093-.699l.709-1.227l1.152.597Z");
}
</style><path class="m1_zxnbgm"/>`,
		"fallback": "uix-sharp:road-resurfacing",
	});
}

export default Component;
