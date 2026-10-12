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
		"content": `<style>.z1ju6cbcx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.64 7.27l7.97 9.71l.64.77H2.75l.64-.77l7.97-9.71l.64-.77zm-.34 3.23l.95 7.25M6.66 13h5.97");
}
</style><path class="z1ju6cbcx"/>`,
		"fallback": "iconoven:pyramid-sharp",
	});
}

export default Component;
