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
		"content": `<style>.i5im3z8_h {
  d: path("M7.5 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0h4.75M13.5 8v2m2.75-2v2M8 13.5h4M8 17h3.5m2.75 3.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm4.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-2-1.25l3.75-4.75M19.25 19l-3.75-4.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xcwcvflyr {
  d: path("M11.6 21.5H4.5v-19h15V11");
}
</style><g class="ulnmmdpxh"><path class="xcwcvflyr"/><path class="i5im3z8_h"/></g>`,
		"fallback": "uix-sharp:lease-termination",
	});
}

export default Component;
