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
		"content": `<style>.nl7r3fb8c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5h16.77v16.774H5.5zm0 20.226h16.77V42.5H5.5zM42.491 42.5h-16.77V25.726H37.39c5.555 5.202 5.1 16.774 5.1 16.774ZM30.093 13.109c0 3.751 2.564 5.73 5.623 9.165h-9.994V5.5h16.77c0 3.829-12.4 3.485-12.4 7.609");
}
</style><path class="nl7r3fb8c"/>`,
		"fallback": "arcticons:readly",
	});
}

export default Component;
