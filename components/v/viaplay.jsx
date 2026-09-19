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
		"content": `<style>.viy0all6z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5a21.37 21.37 0 0 0-13.75 5L32 19.12v10L10.3 40.57A21.5 21.5 0 1 0 24 2.5m-19.28 12a21.48 21.48 0 0 0 0 19l18-9.51Z");
}
</style><path class="viy0all6z"/>`,
		"fallback": "arcticons:viaplay",
	});
}

export default Component;
