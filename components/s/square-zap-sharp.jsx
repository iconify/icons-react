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
		"content": `<style>.i1udj9ecx {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L21 3L21 21L3 21L3 3ZM13.1111 7.0001L7.0001 13.1111L11.4444 13.1111L10.8889 16.9999L16.9999 10.8889L12.5556 10.8889L13.1111 7.0001Z");
}
</style><path class="i1udj9ecx"/>`,
		"fallback": "keyline-icons:square-zap-sharp",
	});
}

export default Component;
