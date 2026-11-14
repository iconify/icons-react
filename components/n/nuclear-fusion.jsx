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
		"content": `<style>.gh-eohwic {
  d: path("M6 12a3.75 3.75 0 1 0 7.5 0A3.75 3.75 0 1 0 6 12Z");
}

.ou3dmzb7p {
  d: path("M10.5 12a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM3.75 5.25l1.5 1.5m15-1.5l-1.5 1.5m-15 12l1.5-1.5m15 1.5l-1.5-1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gh-eohwic"/><path class="ou3dmzb7p"/></g>`,
		"fallback": "uix-sharp:nuclear-fusion",
	});
}

export default Component;
