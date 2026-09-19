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
		"content": `<style>.k--td0b5u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.93 8.535a5.76 5.76 0 0 1 5.764 5.765a5.766 5.766 0 0 1-5.765 5.765c-3.176 0-5.752-2.588-5.752-5.765a5.757 5.757 0 0 1 5.752-5.765");
}

.vkhdwpbny {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.447 27.947V5.5h29.106v22.447C38.553 35.985 32.037 42.5 24 42.5S9.447 35.984 9.447 27.947");
}
</style><path class="vkhdwpbny"/><path class="k--td0b5u"/>`,
		"fallback": "arcticons:ou-study",
	});
}

export default Component;
