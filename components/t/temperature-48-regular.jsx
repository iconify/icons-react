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
		"content": `<style>.pvdvit5yl {
  fill: currentColor;
  d: path("M24 8.5a3.5 3.5 0 0 0-3.5 3.5v15.787l-.458.376a6.25 6.25 0 1 0 7.916 0l-.458-.376V12A3.5 3.5 0 0 0 24 8.5M18 12a6 6 0 0 1 12 0v14.631a8.75 8.75 0 1 1-12 0zm10 21a4 4 0 1 1-5.25-3.8V18.25a1.25 1.25 0 1 1 2.5 0V29.2A4 4 0 0 1 28 33");
}
</style><path class="pvdvit5yl"/>`,
		"fallback": "fluent:temperature-48-regular",
	});
}

export default Component;
