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
		"content": `<style>.refi_ebwe {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L21 3L21 21L3 21L3 3ZM3 15L21 15M8.7071 11.2929L12 8L15.2929 11.2929");
}
</style><path class="refi_ebwe"/>`,
		"fallback": "keyline-icons:panel-bottom-open-sharp",
	});
}

export default Component;
