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
		"content": `<style>.szqv9tq5a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.36 20.372v8.163h9.524v9.523h8.162V20.372zM24.453 4.5a19.5 19.5 0 0 0 0 39v-9.07a10.43 10.43 0 0 1 0-20.86z");
}
</style><path class="szqv9tq5a"/>`,
		"fallback": "arcticons:logitech-g",
	});
}

export default Component;
