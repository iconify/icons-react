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

.y8b5nlc1v {
  d: path("M8.5 5.5h7v13h-7Zm0 6.5h7M12 8.75h.01");
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="y8b5nlc1v"/></g>`,
		"fallback": "uix-sharp:light-switch-on",
	});
}

export default Component;
