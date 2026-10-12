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
		"content": `<style>.bll2ix7vr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 13h3.5v8.25H4zm1.06-3.16a2.29 2.29 0 0 1-.32-4.56a3.29 3.29 0 0 1 6.11-.8a2.58 2.58 0 0 1-.35 5.36ZM10.25 14l1.38-1.25L13 14l1.37 1.25L15.75 14l1.38-1.25L18.5 14l1.37 1.25L21.25 14m-11 3.5l1.38-1.25L13 17.5l1.37 1.25l1.38-1.25l1.38-1.25l1.37 1.25l1.37 1.25l1.38-1.25m-11 3l1.38-1.25L13 20.5l1.37 1.25l1.38-1.25l1.38-1.25l1.37 1.25");
}
</style><path class="bll2ix7vr"/>`,
		"fallback": "iconoven:smog-sharp",
	});
}

export default Component;
