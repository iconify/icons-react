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
		"content": `<style>.emjxlbbfl {
  d: path("M4 3.5h16v11.75H4Zm0 11.75L2.5 19.5h19L20 15.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v6vauh0gy {
  d: path("m11.372 7.339l.052-1.038h1.152l.052 1.038l.929.537l.925-.474l.576.997l-.873.564v1.074l.873.564l-.576.997l-.925-.474l-.929.537l-.052 1.038h-1.152l-.052-1.038l-.929-.537l-.925.474l-.576-.997l.873-.564V8.963l-.873-.564l.576-.997l.925.474Z");
}
</style><g class="ulnmmdpxh"><path class="emjxlbbfl"/><path class="v6vauh0gy"/></g>`,
		"fallback": "uix-sharp:laptop-setup",
	});
}

export default Component;
