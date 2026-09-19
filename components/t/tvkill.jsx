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
		"content": `<style>.f5gu3q48o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.48 34a1 1 0 0 0 1-1V11.39a1 1 0 0 0-1-1h-37a1 1 0 0 0-1 1V33a1 1 0 0 0 1 1Zm-19.59-3.48v-7.25H19l6.11-9.44v7.24H29ZM24 33.97v3.66m-7.43 0h14.86");
}
</style><path class="f5gu3q48o"/>`,
		"fallback": "arcticons:tvkill",
	});
}

export default Component;
