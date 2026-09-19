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
		"content": `<style>.bk4wmfbis {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 21.431L24 8.743L5.5 21.431v20.856h37zm-5.035-8.718a4.4 4.4 0 0 0-4.804-2.917l-.008.013m8.695 1.685a8.65 8.65 0 0 0-9.426-5.687");
}
</style><path class="bk4wmfbis"/>`,
		"fallback": "arcticons:smart-life",
	});
}

export default Component;
