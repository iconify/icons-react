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
		"content": `<style>.u79xb1b0t {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 22V15M12 15C12 12 8.828 8.828 6 6L3.6 3.6M12 15C12 12 15.172 8.828 18 6L20.4 3.6M8 3H3V8M16 3H21V8");
}
</style><path class="u79xb1b0t"/>`,
		"fallback": "keyline-icons:split-2-sharp",
	});
}

export default Component;
