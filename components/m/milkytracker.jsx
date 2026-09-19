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
		"content": `<style>.br9wd5bwh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.66 20.54L24 27.47L37.34 21M24 27.47L31.09 13m6.25 8l-7.62-5.22M31.09 13v-1.8L17.44 4.5v1.9");
}

.d02ese84p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.66 20.54v16l13.3 7l13.38-7V21l-6.25-8l-13.65-6.6ZM24 43.5v-16");
}
</style><path class="d02ese84p"/><path class="br9wd5bwh"/>`,
		"fallback": "arcticons:milkytracker",
	});
}

export default Component;
