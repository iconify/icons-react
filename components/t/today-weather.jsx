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
		"content": `<style>.k-td8l3av {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.364 45.5l6.359-1.907l-11.446-3.816l15.897-3.179l-20.348-5.087c22.255-1.907 30.521-4.45 30.521-7.63c0-28.613-40.694-27.977-40.694-1.272");
}
</style><path class="k-td8l3av"/>`,
		"fallback": "arcticons:today-weather",
	});
}

export default Component;
