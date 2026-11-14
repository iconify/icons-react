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
		"content": `<style>.dxsxh5xhc {
  d: path("M6 2.5h12v19H6Z");
}

.rb42kgmkd {
  d: path("M8.5 5.5h7v4h-7Zm1 8.5h.01M12 14h.01m2.49 0h.01M9.5 17.5h.01m2.49 0h.01m2.49 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dxsxh5xhc"/><path class="rb42kgmkd"/></g>`,
		"fallback": "uix-sharp:payment-terminal",
	});
}

export default Component;
