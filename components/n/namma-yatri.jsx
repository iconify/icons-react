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
		"content": `<style>.shw-yjb5w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m7.055 5.55l.048 14.402C7.055 16.057 13.897 5.566 23.45 5.5c9.553-.065 17.368 9.069 17.495 14.452m-.191 22.532V27.965c0 4.767-7.343 14.663-16.85 14.534c-9.506-.13-16.775-9.023-16.8-14.534");
}
</style><path class="shw-yjb5w"/>`,
		"fallback": "arcticons:namma-yatri",
	});
}

export default Component;
