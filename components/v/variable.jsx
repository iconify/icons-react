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
		"content": `<style>.ez4kybz4i {
  d: path("M9 6h12.5v12H9Zm-6.5 6H9");
}

.f48e5dbbd {
  d: path("M12.5 15c2 0 3-6 5-6");
}

.l-vg4sbvj {
  d: path("m6 9l3 3l-3 3m6.5-6c2 0 3 6 5 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ez4kybz4i"/><path class="l-vg4sbvj"/><path class="f48e5dbbd"/></g>`,
		"fallback": "uix-sharp:variable",
	});
}

export default Component;
