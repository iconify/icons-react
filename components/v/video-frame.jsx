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
		"content": `<style>.lv82_69hf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 8V6C3 4.34315 4.34315 3 6 3H8M16 3H18C19.6569 3 21 4.34315 21 6V8M8 21H6C4.34315 21 3 19.6569 3 18V16M7.9627 8.1055C7.9627 7.3201 8.8267 6.8413 9.4927 7.2575L14.8023 10.576C15.1156 10.7718 15.1156 11.2282 14.8023 11.424L9.4927 14.7425C8.8267 15.1587 7.9627 14.6799 7.9627 13.8945L7.9627 8.1055ZM18 15V21M15 18L18 21L21 18");
}
</style><path class="lv82_69hf"/>`,
		"fallback": "keyline-icons:video-frame",
	});
}

export default Component;
