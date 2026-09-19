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
		"content": `<style>.ln5rwnb5y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.269 28.202l-1.517 1.709a8.352 8.352 0 1 1 0-11.822l10.496 11.822a8.352 8.352 0 1 0 0-11.822l-1.517 1.709");
}
</style><path class="ln5rwnb5y"/>`,
		"fallback": "arcticons:loop-infinity",
	});
}

export default Component;
