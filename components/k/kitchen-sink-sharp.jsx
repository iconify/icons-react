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
		"content": `<style>.iimlfb29h {
  d: path("M6.5 11h4.25v7.5h-5.5V11zm8 0h4.25v7.5h-5.5V11z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ymv70hbaq {
  d: path("M12 8.25V5a2.25 2.25 0 0 1 4.5 0v.75M2.75 8.25h18.5v13H2.75z");
}
</style><g class="x2cwu0gfd"><path class="ymv70hbaq"/><path class="iimlfb29h"/></g>`,
		"fallback": "iconoven:kitchen-sink-sharp",
	});
}

export default Component;
