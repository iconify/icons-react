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
		"content": `<style>.gdjknqbvl {
  d: path("M10.5 19a8.5 8.5 0 1 1 8.5-8.5");
}

.mbpfhwdhq {
  d: path("M8 10.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm8 5.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-1.75 6c0-1.75 1.75-3 3.75-3s3.75 1.25 3.75 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gdjknqbvl"/><path class="mbpfhwdhq"/></g>`,
		"fallback": "uix-sharp:issue-assign",
	});
}

export default Component;
