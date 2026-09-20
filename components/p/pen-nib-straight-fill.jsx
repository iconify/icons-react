import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.emrr-eu2s {
  fill: currentColor;
  d: path("M222.33 123.89c-.06-.13-.12-.26-.19-.38L192 69.91V32a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v37.9l-30.14 53.61c-.07.12-.13.25-.2.38a15.94 15.94 0 0 0 1.46 16.57l.11.14l77.61 100.81A4 4 0 0 0 120 239v-84.37a24 24 0 1 1 16 0V239a4 4 0 0 0 7.16 2.44l77.6-100.81l.11-.14a15.92 15.92 0 0 0 1.46-16.6M176 64H80V32h96Z");
}
</style><path class="emrr-eu2s"/>`,
		"fallback": "ph:pen-nib-straight-fill",
	});
}

export default Component;
