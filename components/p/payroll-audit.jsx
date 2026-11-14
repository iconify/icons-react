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
		"content": `<style>.a9b3ocpqx {
  d: path("M2.5 8.5h6v13h-6Zm8.75.5a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0Zm8.25 3.5l2 2m-19-2.75h6M2.5 15h6m-6 3.25h6");
}

.o-2mqjl7p {
  d: path("M14.25 9a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a9b3ocpqx"/><path class="o-2mqjl7p"/></g>`,
		"fallback": "uix-sharp:payroll-audit",
	});
}

export default Component;
