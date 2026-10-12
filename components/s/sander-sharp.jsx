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
		"content": `<style>.lw4-r4bsy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 5.25h9.5V8.5h-9.5zM10 8.5v3m4-3v3m-9.25 0h14.5V15H4.75zm14.5 1.75h2M2.75 18h18.5v3.25H2.75z");
}
</style><path class="lw4-r4bsy"/>`,
		"fallback": "iconoven:sander-sharp",
	});
}

export default Component;
