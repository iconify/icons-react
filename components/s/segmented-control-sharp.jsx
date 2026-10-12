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
		"content": `<style>.j51obwwaj {
  d: path("M5.75 7H8.9v10H2.75V7zm9.35.5v9");
}

.pbh9qf25u {
  d: path("M2.75 7h18.5v10H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="pbh9qf25u"/><path class="j51obwwaj"/></g>`,
		"fallback": "iconoven:segmented-control-sharp",
	});
}

export default Component;
