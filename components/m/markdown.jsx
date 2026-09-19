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
		"content": `<style>.mfn55g_je {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 44.5v-41m17.754 30.75L6.247 13.75m35.507 0L6.247 34.25");
}
</style><path class="mfn55g_je"/>`,
		"fallback": "arcticons:markdown",
	});
}

export default Component;
