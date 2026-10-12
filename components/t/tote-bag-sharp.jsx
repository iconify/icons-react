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
		"content": `<style>.bhlr7z7aq {
  d: path("M7.25 9.25h11l.19 1.49l1.12 9.02l.19 1.49H4.25l.19-1.49l1.12-9.02l.19-1.49z");
}

.dark6tb3c {
  d: path("M7.75 9.25v-6h3v6m2.5 0v-6h3v6");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bhlr7z7aq"/><path class="dark6tb3c"/></g>`,
		"fallback": "iconoven:tote-bag-sharp",
	});
}

export default Component;
