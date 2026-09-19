import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rzo848bqa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.058 31.888c-6.265-6.266-6.265-16.424 0-22.689s16.424-6.265 22.69 0zm15.884-15.776c6.265 6.266 6.265 16.424 0 22.689c-6.266 6.265-16.424 6.265-22.69 0z");
}
</style><path class="rzo848bqa"/>`,
		"fallback": "arcticons:securitybank",
	});
}

export default Component;
