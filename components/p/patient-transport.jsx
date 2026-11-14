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
		"content": `<style>.mqfjwjc9g {
  d: path("M6 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM8 8v4.5h5.5l2.5 7");
}

.oet-3dk_w {
  d: path("M12.505 12.345a5.5 5.5 0 1 1-9.01 0M16 5.5h5m-2-2l2 2l-2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mqfjwjc9g"/><path class="oet-3dk_w"/></g>`,
		"fallback": "uix-sharp:patient-transport",
	});
}

export default Component;
