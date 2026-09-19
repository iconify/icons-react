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
		"content": `<style>.d9v6-sb7m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.678 13.032a13.24 13.24 0 0 0-3.932 9.412v11.19l-4.2 4.199h34.907l-4.199-3.89m0-3.993v-7.506A13.25 13.25 0 0 0 27.075 9.563v-.984a3.097 3.097 0 0 0-6.193 0v.995a13.2 13.2 0 0 0-4.25 1.861m2.702 26.398a4.643 4.643 0 1 0 9.287.048v-.048M6.547 5.5l34.906 32.333");
}
</style><path class="d9v6-sb7m"/>`,
		"fallback": "arcticons:tidypanel",
	});
}

export default Component;
