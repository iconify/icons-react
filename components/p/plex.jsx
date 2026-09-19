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
		"content": `<style>.gijwyjb9q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.22 4.5h12.13s9.31 15.12 11 18a3.19 3.19 0 0 1 0 3l-11 18H12.43S22 28.06 23.05 26.38a3.73 3.73 0 0 0 0-4.55C21.62 19.53 12.22 4.5 12.22 4.5");
}
</style><path class="gijwyjb9q"/>`,
		"fallback": "arcticons:plex",
	});
}

export default Component;
