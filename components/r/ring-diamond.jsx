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
		"content": `<style>.djayqxgaj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 8L8.3372 5.09C8.1337 4.73 8.1683 4.29 8.4246 3.97L9.6998 2.38C9.8895 2.14 10.1768 2 10.4806 2H13.5194C13.8232 2 14.1105 2.14 14.3002 2.38L15.5754 3.97C15.8317 4.29 15.8663 4.73 15.6628 5.09L14 8M12 22C8.134 22 5 18.87 5 15C5 11.13 8.134 8 12 8C15.866 8 19 11.13 19 15C19 18.87 15.866 22 12 22Z");
}
</style><path class="djayqxgaj"/>`,
		"fallback": "keyline-icons:ring-diamond",
	});
}

export default Component;
