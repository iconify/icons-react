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
		"content": `<style>.f713gt5hd {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2.1758 8L2 8L2.1125 7.865L3.7991 5.8411C5.8273 3.4072 8.8318 2 12 2C15.1682 2 18.1727 3.4072 20.2009 5.8411L21.8875 7.865L22 8L21.8242 8L2.1758 8ZM12 8L12 23M6 14L18 14M22 11L22 23M22 18L17 18L17 23M2 11L2 23M2 18L7 18L7 23");
}
</style><path class="f713gt5hd"/>`,
		"fallback": "keyline-icons:outdoor-seating-sharp",
	});
}

export default Component;
