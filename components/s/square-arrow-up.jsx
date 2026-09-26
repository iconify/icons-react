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
		"content": `<style>.cc50cvs0o {
  d: path("M6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34315 4.34315 3 6 3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ssv0ocbou {
  d: path("M8 11.8937L11.6464 8.15034C11.8417 7.94989 12.1583 7.94989 12.3536 8.15034L16 11.8937M12 16V8.30068");
}
</style><g class="nrj6p8qat"><path class="cc50cvs0o"/><path class="ssv0ocbou"/></g>`,
		"fallback": "keyline-icons:square-arrow-up",
	});
}

export default Component;
