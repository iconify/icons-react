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
		"content": `<style>.dou4n5biz {
  d: path("m6.5 6.5l3 2.5l-3 2.5m5 0h4");
}

.e4gk14b9q {
  d: path("M2.5 2.5h19v13h-19Zm2 16h15v3h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e4gk14b9q"/><path class="dou4n5biz"/></g>`,
		"fallback": "uix-sharp:lab-mouse",
	});
}

export default Component;
