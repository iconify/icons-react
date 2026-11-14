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
		"content": `<style>.eq2qbjo_a {
  d: path("M6 12a6 9.5 0 1 0 12 0a6 9.5 0 1 0-12 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z_okq_byj {
  d: path("M8.5 9H11l-1.25 2ZM13 9h2.5l-1.25 2Zm-1 2v3.5m-2 3h4");
}
</style><g class="ulnmmdpxh"><path class="eq2qbjo_a"/><path class="z_okq_byj"/></g>`,
		"fallback": "uix-sharp:mask-tribal",
	});
}

export default Component;
