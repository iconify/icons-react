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
		"content": `<style>.d2kns2b6u {
  d: path("M13 2.75V8h5.5m-11 4h4m-4 3h3m7.42-2.12l2.41.99l.92.38v3.06l-.73.68l-2.79 2.58l-.73.68l-.73-.68l-2.79-2.58l-.73-.68v-3.06l.92-.38l2.41-.99l.92-.38z");
}

.h8tdg9b9p {
  d: path("M6 2.75h7.25L18.5 8v13.25H4V2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="h8tdg9b9p"/><path class="d2kns2b6u"/></g>`,
		"fallback": "iconoven:secure-file-sharp",
	});
}

export default Component;
