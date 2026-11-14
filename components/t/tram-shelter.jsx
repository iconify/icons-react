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
		"content": `<style>.nrdquht7z {
  d: path("M5 21V5a1.5 1.5 0 0 1 1.5-1.5h9M2.5 21h19");
}

.sia5jmbvg {
  d: path("M5 14.5h7.5V21m7 0V9m-2.25-2.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nrdquht7z"/><path class="sia5jmbvg"/></g>`,
		"fallback": "uix-sharp:tram-shelter",
	});
}

export default Component;
