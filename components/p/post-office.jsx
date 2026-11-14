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
		"content": `<style>.g50a3bx0k {
  d: path("M8 12h8v5H8Z");
}

.msad3isat {
  d: path("m8 12l4 3l4-3");
}

.ui09lnbbe {
  d: path("m3 9l9-5l9 5v11.5H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ui09lnbbe"/><path class="g50a3bx0k"/><path class="msad3isat"/></g>`,
		"fallback": "uix-sharp:post-office",
	});
}

export default Component;
