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
		"content": `<style>.eg-sbva4i {
  d: path("M9 19.75v-4.5h6v4.5");
}

.fr6cu2yja {
  d: path("M2.5 4.25h19M4 4.25v15.5h16V4.25M7.5 7.75v4m3-4v4m3-4v4m3-4v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fr6cu2yja"/><path class="eg-sbva4i"/></g>`,
		"fallback": "uix-sharp:telecom-exchange",
	});
}

export default Component;
