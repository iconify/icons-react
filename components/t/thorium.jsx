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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.siwdn51ef {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.184 13.534h13.773M17.2 34.465V13.534m10.193.001v20.931m0-8.634c0-2.878 2.345-5.233 5.211-5.233s5.212 2.355 5.212 5.233v8.634");
}
</style><path class="siwdn51ef"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:thorium",
	});
}

export default Component;
