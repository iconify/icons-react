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
		"content": `<style>.smcu-jpuk {
  d: path("m14.25 17l.75-2.75h6l.75 2.75M15 17v4.75h6V17m-6.75 0h7.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ulodr5lup {
  d: path("M12.2 21.5H3v-17h18v6.9M8 2.5v4m8-4v4m-13 3h18M6.5 13h2m2.5 0h1.4m-5.9 4h2");
}
</style><g class="ulnmmdpxh"><path class="ulodr5lup"/><path class="smcu-jpuk"/></g>`,
		"fallback": "uix-sharp:store-appointment",
	});
}

export default Component;
