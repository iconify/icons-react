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
		"content": `<style>.fgakewkfw {
  d: path("M12 2.5L19.5 8v13.5h-15V8Zm0 4.25h.01");
}

.jz-otdhhm {
  d: path("M7.5 11.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm6 5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-3.5.5l4-6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fgakewkfw"/><path class="jz-otdhhm"/></g>`,
		"fallback": "uix-sharp:sale-banner",
	});
}

export default Component;
