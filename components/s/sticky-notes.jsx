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
		"content": `<style>.ewqhuvbjj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.8284 4C15.4046 2.8015 14.2714 2 13 2H5C3.34315 2 2 3.34315 2 5V13C2 14.2714 2.8015 15.4046 4 15.8284M11 8L16 8L22 14L22 19C22 20.6569 20.6569 22 19 22L11 22C9.3431 22 8 20.6569 8 19L8 11C8 9.3431 9.3431 8 11 8ZM16 8L16 11C16 12.6569 17.3431 14 19 14L22 14");
}
</style><path class="ewqhuvbjj"/>`,
		"fallback": "keyline-icons:sticky-notes",
	});
}

export default Component;
