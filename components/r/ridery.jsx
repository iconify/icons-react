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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wxywt9v0a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.862 25.955l6.717 9.411l-11.292.004v-21h5.646c3.192 0 5.78 2.594 5.78 5.793s-2.588 5.792-5.78 5.792h-5.646");
}
</style><path class="wxywt9v0a"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:ridery",
	});
}

export default Component;
