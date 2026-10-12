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
		"content": `<style>.q2yc18ben {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h7.75v10.5H2.75zm0 13.5h7.75v5H2.75zM13.5 2.75h7.75v5H13.5zm0 8h7.75v10.5H13.5z");
}
</style><path class="q2yc18ben"/>`,
		"fallback": "iconoven:layout-brick-sharp",
	});
}

export default Component;
