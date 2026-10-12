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
		"content": `<style>.fjizz0bhz {
  d: path("M12 7.5v4.75M7 13l2.5-4.5h5L17 13M2.75 14.5c.5 4 4.25 6.75 9.25 6.75s8.75-2.75 9.25-6.75c-2.5-.5-5 .25-6.5 1.75l-.786-1.964L12 13.5l-1.964.786l-.786 1.964c-1.5-1.5-4-2.25-6.5-1.75Z");
}

.t88z8mbby {
  cx: 12px;
  cy: 4.5px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="t88z8mbby"/><path class="fjizz0bhz"/></g>`,
		"fallback": "iconoven:lotus-pose-sharp",
	});
}

export default Component;
