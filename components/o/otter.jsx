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
		"content": `<style>.ugj4e4oev {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.076 23.98a8.28 8.28 0 1 1-.004-.24m4.375-7.698l.09 15.916m6.654-15.916l.09 16.096m6.475-11.06l.09 5.935m6.474-8.003l.18 10.16");
}
</style><path class="ugj4e4oev"/>`,
		"fallback": "arcticons:otter",
	});
}

export default Component;
