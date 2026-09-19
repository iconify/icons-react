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
		"content": `<style>.fokqn0b7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.16 34.53H4.5l11.83-15l3.28 4.15l7.81-10.24L43.5 34.53Zm0 0l-8.55-10.82");
}
</style><path class="fokqn0b7k"/>`,
		"fallback": "arcticons:island",
	});
}

export default Component;
