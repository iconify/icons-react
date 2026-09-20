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
		"content": `<style>.sl009tz-t {
  fill: currentColor;
  d: path("M12.5 19v-1h7v1zm-6.77-4l-.707-.688L9.329 10L5.023 5.689L5.731 5l5 5z");
}
</style><path class="sl009tz-t"/>`,
		"fallback": "material-symbols-light:terminal-2-sharp",
	});
}

export default Component;
