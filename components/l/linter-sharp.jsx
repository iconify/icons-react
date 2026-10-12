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
		"content": `<style>.hgsdblekx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.75h11.5m-11.5 5h18.5m-18.5 5h13m-13 5l1.625-1.95L6 19.75l1.625 1.95l1.625-1.95l1.625-1.95l1.625 1.95l1.625 1.95l1.625-1.95");
}
</style><path class="hgsdblekx"/>`,
		"fallback": "iconoven:linter-sharp",
	});
}

export default Component;
