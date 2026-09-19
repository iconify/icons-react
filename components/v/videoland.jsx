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
		"content": `<style>.lvj1aul1a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 40.878L43.5 7.122H32.199L24 22.824L15.801 7.122H4.5z");
}
</style><path class="lvj1aul1a"/>`,
		"fallback": "arcticons:videoland",
	});
}

export default Component;
