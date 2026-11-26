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
		"content": `<style>.pfwphrs0u {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 8L6 11.3813L5.5 11.6699C3.953 12.5631 3 14.2137 3 16C3 17.435 3.6166 18.8008 4.6928 19.75L4.9763 20L11.0237 20L11.3072 19.75C12.3834 18.8008 13 17.435 13 16C13 14.2137 12.047 12.5631 10.5 11.6699L10 11.3813L10 8M10 4L14 4C16.7614 4 19 6.2386 19 9M19 9C20.1046 9 21 10.1193 21 11.5C21 12.8807 20.1046 14 19 14C17.8954 14 17 12.8807 17 11.5C17 10.1193 17.8954 9 19 9ZM10 8L11 8L11 4L5 4L5 8Z");
}
</style><path class="pfwphrs0u"/>`,
		"fallback": "keyline-icons:perfume-bottle-sharp",
	});
}

export default Component;
