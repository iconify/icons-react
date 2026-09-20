import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.uakppg9hq {
  fill: currentColor;
  d: path("M8.003 1a7 7 0 1 1-6.465 9.691a.5.5 0 0 1 .474-.692A6 6 0 0 0 7.54 1.692A.5.5 0 0 1 8.003 1m.719 1.044a7 7 0 0 1-5.941 8.911a6 6 0 1 0 5.941-8.911");
}
</style><path class="uakppg9hq"/>`,
		"fallback": "fluent:weather-moon-16-regular",
	});
}

export default Component;
