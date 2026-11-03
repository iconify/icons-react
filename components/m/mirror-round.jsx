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
		"content": `<style>.yxjimdbtw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 2C14.7614 2 17 4.6863 17 8C17 11.3137 14.7614 14 12 14C9.2386 14 7 11.3137 7 8C7 4.6863 9.2386 2 12 2ZM21 8C21 13.5228 16.9706 18 12 18C7.0294 18 3 13.5228 3 8M22 8L17 8M2 8L7 8M12 18L12 22M9 22L15 22");
}
</style><path class="yxjimdbtw"/>`,
		"fallback": "keyline-icons:mirror-round",
	});
}

export default Component;
