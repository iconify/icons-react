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
		"content": `<style>.cr6g_jb9w {
  d: path("M4 7h16v14H4Zm8-2.25V7m-1.25-3.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.f0msesbdg {
  d: path("M7 10.5h3.5V14H7Zm6.5 0H17V14h-3.5Zm-4.5 7h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cr6g_jb9w"/><path class="f0msesbdg"/></g>`,
		"fallback": "uix-sharp:robot-head",
	});
}

export default Component;
