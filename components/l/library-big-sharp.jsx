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
		"content": `<style>.wu11ki84v {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 3L7 3L7 21L2 21L2 3ZM7 3L12 3L12 21L7 21L7 3ZM12 4.4864L16.3257 3L22 19.5136L17.6743 21L12 4.4864Z");
}
</style><path class="wu11ki84v"/>`,
		"fallback": "keyline-icons:library-big-sharp",
	});
}

export default Component;
