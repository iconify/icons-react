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
		"content": `<style>.ondj9lgro {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 21L5 21L2.0001 10L21.9999 10L21.5262 11.7369M9 10L10 3L16 3L15 10M21 17.5C21 18.8807 19.8807 20 18.5 20C17.1193 20 16 18.8807 16 17.5C16 16.1193 17.1193 15 18.5 15C19.8807 15 21 16.1193 21 17.5ZM20.2678 19.2678L22.2929 21.2929");
}
</style><path class="ondj9lgro"/>`,
		"fallback": "keyline-icons:shopping-basket-search-sharp",
	});
}

export default Component;
