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
		"content": `<style>.w31p03zxw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 27.128a11 11 0 0 1 10.395 7.401L24 4.5L13.605 34.53A11 11 0 0 1 24 27.127zM10.5 43.5l1.553-4.486m23.894 0L37.5 43.5");
}
</style><path class="w31p03zxw"/>`,
		"fallback": "arcticons:telasa",
	});
}

export default Component;
