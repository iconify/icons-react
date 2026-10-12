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
		"content": `<style>.gf18ytbxv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.37 5l1.51.88l.87.5v3.75l-.87.5l-1.51.87l-.87.5l-.87-.5l-1.51-.87l-.87-.5V6.38l.87-.5L6.63 5l.87-.5zm9 0l1.51.88l.87.5v3.75l-.87.5l-1.51.87l-.87.5l-.87-.5l-1.51-.87l-.87-.5V6.38l.87-.5L15.63 5l.87-.5zm-4.5 7.75l1.51.88l.87.5v3.75l-.87.5l-1.51.87l-.87.5l-.87-.5l-1.51-.87l-.87-.5v-3.75l.87-.5l1.51-.88l.87-.5z");
}
</style><path class="gf18ytbxv"/>`,
		"fallback": "iconoven:microservice-sharp",
	});
}

export default Component;
