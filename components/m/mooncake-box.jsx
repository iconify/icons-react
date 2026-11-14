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
		"content": `<style>.f888l9bac {
  d: path("M12 4.25a4 4 0 0 1 5.5 2.25a4 4 0 0 1 2.25 5.5a4 4 0 0 1-2.25 5.5a4 4 0 0 1-5.5 2.25a4 4 0 0 1-5.5-2.25A4 4 0 0 1 4.25 12A4 4 0 0 1 6.5 6.5A4 4 0 0 1 12 4.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yaa1su--k {
  d: path("M9.5 9.5a2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1-5 0a2.5 2.5 0 0 1 0-5Z");
}
</style><g class="ulnmmdpxh"><path class="f888l9bac"/><path class="yaa1su--k"/></g>`,
		"fallback": "uix-sharp:mooncake-box",
	});
}

export default Component;
