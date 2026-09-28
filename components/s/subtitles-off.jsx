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
		"content": `<style>.dpa3ly_4c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19.8708 19.8708C19.5885 19.9565 19.295 20 19 20L5 20C3.3431 20 2 18.6569 2 17L2 7C2 5.6786 2.8646 4.5128 4.1292 4.1292M9.6569 4L19 4C20.6569 4 22 5.3431 22 7L22 16.3431M6 10L8 10M6 14L12 14M2 2L22 22");
}
</style><path class="dpa3ly_4c"/>`,
		"fallback": "keyline-icons:subtitles-off",
	});
}

export default Component;
