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
		"content": `<style>.kne4i2bjp {
  d: path("M7 17.5V13a5 5 0 0 1 10 0v4.5h2.75V21H4.25v-3.5h1Zm0 0h10");
}

.wv694gblo {
  d: path("M12 10.5H9.5v4M12 2.75V5m-6.75.25l1.5 1.5m12-1.5l-1.5 1.5M2.75 12h1.5m15.5 0h1.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="kne4i2bjp"/><path class="wv694gblo"/></g>`,
		"fallback": "iconoven:siren-sharp",
	});
}

export default Component;
