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
		"content": `<style>.ex5et3adw {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 9L12 2M8.7071 5.2929L12 2L15.2929 5.2929M12 15L12 22M8.7071 18.7071L12 22L15.2929 18.7071M4 12L20 12");
}
</style><path class="ex5et3adw"/>`,
		"fallback": "keyline-icons:unfold-vertical-sharp-fill",
	});
}

export default Component;
