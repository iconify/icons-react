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
		"content": `<style>.l34a03bys {
  fill: currentColor;
  d: path("M8.003 1a7 7 0 1 1-6.465 9.691a.5.5 0 0 1 .474-.692A6 6 0 0 0 7.54 1.692A.5.5 0 0 1 8.003 1");
}
</style><path class="l34a03bys"/>`,
		"fallback": "fluent:weather-moon-16-filled",
	});
}

export default Component;
