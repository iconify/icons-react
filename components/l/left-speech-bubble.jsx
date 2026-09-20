import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ah-go-b_i {
  fill: var(--svg-color--fff, #fff);
  stroke: var(--svg-color--2f2f2f, #2f2f2f);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  stroke-width: var(--svg-stroke-width--6px, 6px);
  d: path("M6 60.67c0 25.22 25.22 45.66 56.33 45.66c11.52 0 22.24-2.8 31.16-7.62c3.52-1.9 26.29 11.93 29.19 9.46c3.12-2.66-13.68-21.67-11.42-24.87c4.7-6.67 7.39-14.4 7.39-22.64C118.66 35.45 93.44 15 62.33 15S6 35.45 6 60.67");
}
</style><path class="ah-go-b_i"/>`,
		"fallback": "noto-v1:left-speech-bubble",
	});
}

export default Component;
