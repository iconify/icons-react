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
		"content": `<style>.t3j8fsq7h {
  d: path("M3.5 21.5v-19m0 2.5h17m-14 2.5H20v11H6.5ZM9 5v2.5M17.5 5v2.5");
}

.ue2wzf4pr {
  fill: currentColor;
  d: path("m6.5 14.5l6.75-7H17l-10.5 11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t3j8fsq7h"/><path class="ue2wzf4pr"/></g>`,
		"fallback": "uix-sharp:sold-sign",
	});
}

export default Component;
