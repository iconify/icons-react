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
		"content": `<style>.g05ibg-na {
  d: path("M10.5 4v3.5A1.5 1.5 0 0 0 12 9h9.5M12 11.75v5.5M9.25 14.5h5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vgtjupbng {
  d: path("M3.5 4h17a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z");
}
</style><g class="ulnmmdpxh"><path class="vgtjupbng"/><path class="g05ibg-na"/></g>`,
		"fallback": "uix-sharp:tab-new",
	});
}

export default Component;
