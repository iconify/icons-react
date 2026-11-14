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
		"content": `<style>.o5npekv3v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.5 17.5l.75-3L19 8.75L21.25 11l-5.75 5.75Zm-10 3h19m-19-4C4 13 5.5 12.5 6 14s-.5 3.25 1 3.25S9 14 10.25 14.5c.75.25.5 2 1.75 2.25");
}
</style><path class="o5npekv3v"/>`,
		"fallback": "uix-sharp:patient-consent",
	});
}

export default Component;
