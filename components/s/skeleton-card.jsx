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
		"content": `<style>.m3bq06brf {
  fill: currentColor;
  d: path("M6 6.5h4v4H6Z");
}

.oda4a2bll {
  d: path("M3 3.5h18v17H3Z");
}

.u0cfjfaql {
  d: path("M6 13.5h12m-12 4h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oda4a2bll"/><path class="m3bq06brf"/><path class="u0cfjfaql"/></g>`,
		"fallback": "uix-sharp:skeleton-card",
	});
}

export default Component;
