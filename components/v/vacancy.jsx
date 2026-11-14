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
		"content": `<style>.aqk7-vb8o {
  d: path("M9 9.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3 3v9m0-4h2.5M12 21h2.5");
}

.f4j5zvbjz {
  d: path("M6 3h12m-6 0v3.5a1.25 1.25 0 0 1-2.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f4j5zvbjz"/><path class="aqk7-vb8o"/></g>`,
		"fallback": "uix-sharp:vacancy",
	});
}

export default Component;
