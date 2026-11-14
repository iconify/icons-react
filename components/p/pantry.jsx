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
		"content": `<style>.cqrpnhb6n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18.5h19m-17 0v3m15-3v3M3 9h5v9.5H3Zm0 2.75h5m2.75-6.25h3.5v13h-3.5Zm0 3h3.5m2.75 3h4v7h-4Zm0 2.5h4");
}
</style><path class="cqrpnhb6n"/>`,
		"fallback": "uix-sharp:pantry",
	});
}

export default Component;
