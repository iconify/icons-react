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
		"content": `<style>.lgcqmdbti {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m42.5 42.5l-16-16m16-21l-16 16m-21 21l15.672-15.672a4 4 0 0 0 0-5.656L5.5 5.5");
}
</style><path class="lgcqmdbti"/>`,
		"fallback": "arcticons:picooc",
	});
}

export default Component;
