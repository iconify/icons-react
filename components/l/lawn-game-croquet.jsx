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
		"content": `<style>.ohri6tbao {
  d: path("M2.5 14.5h4v6h-4Zm2 0L7 3m2.25 17.5V12a4.75 4.75 0 0 1 9.5 0v8.5");
}

.rcoo5yp1h {
  d: path("M12 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ohri6tbao"/><path class="rcoo5yp1h"/></g>`,
		"fallback": "uix-sharp:lawn-game-croquet",
	});
}

export default Component;
