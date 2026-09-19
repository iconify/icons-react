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
		"content": `<style>.j7pdc9iiu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.04 9.823L12.521 42.5h25.058");
}

.zvn82kp3a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.94 5.5L10.421 38.177h25.057");
}
</style><path class="zvn82kp3a"/><path class="j7pdc9iiu"/>`,
		"fallback": "arcticons:lucid-launcher",
	});
}

export default Component;
