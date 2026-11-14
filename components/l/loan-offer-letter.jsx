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
		"content": `<style>.fbf28eboe {
  d: path("M2.5 12v7.5a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V12");
}

.ihb5cpb5i {
  d: path("M8.75 7.75a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.lpmq4tukk {
  d: path("m2.5 12l9.5 5.5l9.5-5.5M5 11.5V4a1.5 1.5 0 0 1 1.5-1.5h11A1.5 1.5 0 0 1 19 4v7.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z6gbq4bst {
  d: path("M13 6.75c-.25-.5-.5-.5-1-.5S11 6.5 11 7c0 .75 2 .5 2 1.5c0 .5-.5.75-1 .75s-1 0-1-.5m1-3.25v.75m0 3V10");
}
</style><g class="ulnmmdpxh"><path class="fbf28eboe"/><path class="lpmq4tukk"/><path class="ihb5cpb5i"/><path class="z6gbq4bst"/></g>`,
		"fallback": "uix-sharp:loan-offer-letter",
	});
}

export default Component;
