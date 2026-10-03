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
		"content": `<style>.eaxjl9uey {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 17L3 17L3 3L17 3L17 10M12.7071 12.7071L20.8536 20.8536M12 21L21 21L21 12");
}
</style><path class="eaxjl9uey"/>`,
		"fallback": "keyline-icons:square-arrow-out-down-right-sharp",
	});
}

export default Component;
