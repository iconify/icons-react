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
		"content": `<style>.b1eoo2b7q {
  d: path("M16.75 17.75a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.nyu3scy8x {
  d: path("M13.432 11.826L12 12.5l-8.5-4l8.5-4l8.5 4l-5.44 2.56m-.723.34l-.453.213M6.5 10v5c0 1.274 1.804 2.549 4.187 2.903m6.813-6.904V10m-13-1v6m12.483.109l.059-1.296h1.416l.059 1.296l1.136.656l1.152-.597l.709 1.227l-1.093.699v1.312l1.093.699l-.709 1.227l-1.152-.597l-1.136.656l-.059 1.296h-1.416l-.059-1.296l-1.136-.656l-1.152.597l-.709-1.227l1.093-.699v-1.312l-1.093-.699l.709-1.227l1.152.597Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nyu3scy8x"/><path class="b1eoo2b7q"/></g>`,
		"fallback": "uix-sharp:skills-training",
	});
}

export default Component;
