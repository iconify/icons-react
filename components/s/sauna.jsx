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
		"content": `<style>.o7rvrxfad {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 9q-1.35-1.5 0-3c1.35-1.5.9-2 0-3M11 9q-1.35-1.5 0-3c1.35-1.5.9-2 0-3m4 8.25l4.25-6.75m-1.5-.25a1.75 1.75 0 1 0 3.5 0m-16.5 7h11.5q1.25 0 1.06 1.24l-1.12 7.52q-.19 1.24-1.44 1.24h-8.5q-1.25 0-1.44-1.24l-1.12-7.52q-.19-1.24 1.06-1.24m-.6 4.25h12.7");
}
</style><path class="o7rvrxfad"/>`,
		"fallback": "iconoven:sauna",
	});
}

export default Component;
