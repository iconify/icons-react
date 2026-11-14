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
		"content": `<style>.b0m3guf6o {
  d: path("M12 2.5c2.5 3 4.5 5.5 4.5 8a4.5 4.5 0 0 1-9 0c0-2 1-3.5 2.5-4.5c0 1.5.75 2.5 1.5 2.75c0-2.25-.25-4.25.5-6.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xuc8tobhc {
  d: path("M5 15h14q-.5 3.5-7 3.5T5 15Zm7 3.5V21m-3.5 0h7");
}
</style><g class="ulnmmdpxh"><path class="b0m3guf6o"/><path class="xuc8tobhc"/></g>`,
		"fallback": "uix-sharp:memorial-flame",
	});
}

export default Component;
