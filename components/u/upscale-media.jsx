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
		"content": `<style>.f8o9ktm0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.404 17.998H9.5a4 4 0 0 0-4 4V38.5a4 4 0 0 0 4 4h16.502a4 4 0 0 0 4-4v-3.904");
}

.hqgss0buq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.464 24.008V12.536H23.992");
}

.z7l-7vt2e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.01 34.596H38.5a4 4 0 0 0 4-4V9.5a4 4 0 0 0-4-4H17.404a4 4 0 0 0-4 4v14.49m22.06-11.454L15.167 32.833");
}
</style><path class="hqgss0buq"/><path class="z7l-7vt2e"/><path class="f8o9ktm0p"/>`,
		"fallback": "arcticons:upscale-media",
	});
}

export default Component;
