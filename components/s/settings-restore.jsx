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
		"content": `<style>.mk5xfob2d {
  d: path("M5 12a8 8 0 1 1 4 6.928");
}

.r3i4ax27t {
  d: path("m2 9l3 3l3-3m4.733.859l.103-1.05h1.328l.103 1.05l1.136.656l.961-.435l.664 1.15l-.857.614v1.312l.857.614l-.664 1.15l-.961-.435l-1.136.656l-.103 1.05h-1.328l-.103-1.05l-1.136-.656l-.961.435l-.664-1.15l.857-.614v-1.312l-.857-.614l.664-1.15l.961.435Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mk5xfob2d"/><path class="r3i4ax27t"/></g>`,
		"fallback": "uix-sharp:settings-restore",
	});
}

export default Component;
