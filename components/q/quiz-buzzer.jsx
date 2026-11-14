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
		"content": `<style>.f1kba36vl {
  d: path("M2.5 16h19v4.5h-19ZM5 16a7 7 0 0 1 14 0");
}

.lu8a-i6tb {
  d: path("M10 9.25V5.5h4v3.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f1kba36vl"/><path class="lu8a-i6tb"/></g>`,
		"fallback": "uix-sharp:quiz-buzzer",
	});
}

export default Component;
