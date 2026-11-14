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
		"content": `<style>.nv2gxub7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5h17v8h-17Zm0 10.75h17v8h-17Zm4-6.75h.01M7.5 17.25h.01M12.5 6.5h4m-4 10.75h4");
}
</style><path class="nv2gxub7t"/>`,
		"fallback": "uix-sharp:nas-drive",
	});
}

export default Component;
