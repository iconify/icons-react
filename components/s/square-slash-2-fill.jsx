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
		"content": `<style>.k9tlu577m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 4L17 4C18.6569 4 20 5.3431 20 7L20 17C20 18.6569 18.6569 20 17 20L7 20C5.3431 20 4 18.6569 4 17L4 7C4 5.3431 5.3431 4 7 4ZM3 21L21 3");
}
</style><path class="k9tlu577m"/>`,
		"fallback": "keyline-icons:square-slash-2-fill",
	});
}

export default Component;
