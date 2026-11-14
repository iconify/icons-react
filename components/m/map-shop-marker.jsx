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
		"content": `<style>.gns-czbtr {
  d: path("m8.5 8.5l1-3h5l1 3Zm1 0V13h5V8.5");
}

.lv68kwbyp {
  d: path("M12 21.5c-3-3-7.5-7.5-7.5-12a7.5 7.5 0 0 1 15 0c0 4.5-4.5 9-7.5 12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lv68kwbyp"/><path class="gns-czbtr"/></g>`,
		"fallback": "uix-sharp:map-shop-marker",
	});
}

export default Component;
