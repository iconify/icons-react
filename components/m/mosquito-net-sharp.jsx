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
		"content": `<style>.hjru5mbwv {
  cx: 12px;
  cy: 4px;
  r: 1.25px;
}

.n1gi35thh {
  d: path("M12 5.25c-1 4.75-8 7.25-8.75 12h17.5C20 12.5 13 10 12 5.25Z");
}

.wiis-poqv {
  d: path("M10.25 12.75L9.5 15v2.25m4.25-4.5L14.5 15v2.25m-11.75 0h18.5M5 17.25v3.5m14-3.5v3.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="hjru5mbwv"/><path class="n1gi35thh"/><path class="wiis-poqv"/></g>`,
		"fallback": "iconoven:mosquito-net-sharp",
	});
}

export default Component;
