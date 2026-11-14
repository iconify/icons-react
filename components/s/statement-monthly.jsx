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
		"content": `<style>.at1v3ixlc {
  d: path("M12.2 21.5H4.5v-19h15v9.2M8 7h8m-8 3.5h8M8 14h3.5");
}

.qfz86qebg {
  d: path("M15 15.5h6v5.75h-6Zm0 2.25h6m-4.25-3.25V16m2.5-1.5V16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="at1v3ixlc"/><path class="qfz86qebg"/></g>`,
		"fallback": "uix-sharp:statement-monthly",
	});
}

export default Component;
