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
		"content": `<style>.p3f05cc1a {
  d: path("M6.75 7.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM14.5 7H17m-2.5 3H17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.urq0adbdy {
  d: path("M4.5 2.5h15V18h-15ZM8 18v3.5h8V18M12 2.5V18");
}
</style><g class="ulnmmdpxh"><path class="urq0adbdy"/><path class="p3f05cc1a"/></g>`,
		"fallback": "uix-sharp:meter-cabinet-street",
	});
}

export default Component;
