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
		"content": `<style>.odkcmbchy {
  d: path("M12.25 9.319a3.5 3.5 0 0 1 4.5 0m-6.428-2.298a6.5 6.5 0 0 1 8.356 0");
}

.t6b31xbld {
  d: path("M3.5 9h4l7-4.5v15l-7-4.5h-4ZM6 15l1 4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t6b31xbld"/><path class="odkcmbchy"/></g>`,
		"fallback": "uix-sharp:megaphone-film",
	});
}

export default Component;
