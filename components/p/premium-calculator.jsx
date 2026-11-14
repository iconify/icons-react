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
		"content": `<style>.eoz3zibrm {
  d: path("M4.5 2.5h15v19h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z7s1z_bdl {
  d: path("M7.5 5.5h9V9h-9Zm1 7.5h.01M12 13h.01m3.49 0h.01M8.5 17h.01M12 17h.01m3.49 0h.01");
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="z7s1z_bdl"/></g>`,
		"fallback": "uix-sharp:premium-calculator",
	});
}

export default Component;
