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
		"content": `<style>.z2-gtrb0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 30.5c0-7.18-5.82-13-13-13c0-7.18 5.82-13 13-13s13 5.82 13 13s-5.82 13-13 13H11v13c7.18 0 13-5.82 13-13");
}
</style><path class="z2-gtrb0x"/>`,
		"fallback": "arcticons:property-finder",
	});
}

export default Component;
