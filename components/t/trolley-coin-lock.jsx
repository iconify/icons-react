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
		"content": `<style>.ah55kfbgu {
  d: path("M19.25 16.75C19 16.25 18.6 16 18 16c-.7 0-1.25.4-1.25 1c0 1.25 2.5.75 2.5 2c0 .6-.55 1-1.25 1c-.6 0-1-.25-1.25-.75");
}

.dl83erbjy {
  d: path("M2.5 4H5l2.25 10h5.55m3.844-2.416L18 6.5H5.75m1.5 7.5l.25 3m0 0h4M7 19.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-.5-9.25H17M14.25 18a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dl83erbjy"/><path class="ah55kfbgu"/></g>`,
		"fallback": "uix-sharp:trolley-coin-lock",
	});
}

export default Component;
