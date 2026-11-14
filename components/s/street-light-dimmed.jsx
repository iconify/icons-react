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
		"content": `<style>.nxp856bhb {
  fill: currentColor;
  d: path("M18.5 15a3.5 3.5 0 0 1 0 7Z");
}

.szpseb1br {
  d: path("M4 21h6m-3 0V9m0 0a6 6 0 0 1 6-6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x47c8wdlw {
  d: path("M12 3h8l-2 3.5h-4Zm3 15.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}
</style><g class="ulnmmdpxh"><path class="szpseb1br"/><path class="x47c8wdlw"/><path class="nxp856bhb"/></g>`,
		"fallback": "uix-sharp:street-light-dimmed",
	});
}

export default Component;
