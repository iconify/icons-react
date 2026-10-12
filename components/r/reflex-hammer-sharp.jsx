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
		"content": `<style>.djopwbyei {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 20.5l9.6-9.6m5.11 1.97l-.34.34l-1.24 1.24l-1.24-1.24l-4.6-4.6l-1.24-1.24l1.24-1.24l.34-.34l1.24-1.24l1.24 1.24l4.6 4.6l1.24 1.24z");
}
</style><path class="djopwbyei"/>`,
		"fallback": "iconoven:reflex-hammer-sharp",
	});
}

export default Component;
