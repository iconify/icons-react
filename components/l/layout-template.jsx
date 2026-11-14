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
		"content": `<style>.mdm8h7vrj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h6v19h-6Zm8.75 0H21.5v6H11.25Zm0 8.75H21.5V21.5H11.25Z");
}
</style><path class="mdm8h7vrj"/>`,
		"fallback": "uix-sharp:layout-template",
	});
}

export default Component;
