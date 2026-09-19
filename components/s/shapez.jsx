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
		"content": `<style>.a_1wniu1a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13 24h11v11H13z");
}

.snqmvj41f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 24h-37C5.5 13.783 13.783 5.5 24 5.5h18.5zc0 10.217-8.283 18.5-18.5 18.5v-37");
}
</style><path class="snqmvj41f"/><path class="a_1wniu1a"/>`,
		"fallback": "arcticons:shapez",
	});
}

export default Component;
