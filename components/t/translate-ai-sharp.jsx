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
		"content": `<style>.hb-dlg0kz {
  d: path("M2.75 2.75h11v11h-11z");
}

.nkms15b8q {
  d: path("m5.75 10.75l2.5-5l2.5 5M6.6 9h3.3m5.85-4.75h3.75V8.5M17.75 7l1.75 1.75L21.25 7M16 12.25q.54 3.96 4.5 4.5q-3.96.54-4.5 4.5q-.54-3.96-4.5-4.5q3.96-.54 4.5-4.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hb-dlg0kz"/><path class="nkms15b8q"/></g>`,
		"fallback": "iconoven:translate-ai-sharp",
	});
}

export default Component;
