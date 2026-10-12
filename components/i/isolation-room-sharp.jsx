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
		"content": `<style>.gwrwmibay {
  d: path("M7.75 18.25a4.25 4.25 0 0 1 8.5 0Z");
}

.q7imirmbd {
  d: path("M2.75 3.25h18.5v18H2.75zm3 3v12m12.5-12v12");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zls1_oujj {
  cx: 12px;
  cy: 9px;
  r: 2.5px;
}
</style><g class="x2cwu0gfd"><path class="q7imirmbd"/><circle class="zls1_oujj"/><path class="gwrwmibay"/></g>`,
		"fallback": "iconoven:isolation-room-sharp",
	});
}

export default Component;
