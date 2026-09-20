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
		"content": `<style>.g46ngkbec {
  fill: currentColor;
  d: path("M1.147 1.146a.5.5 0 0 1 .707 0l13 13a.5.5 0 1 1-.707.707l-1.565-1.564A6.97 6.97 0 0 1 8.002 15a7 7 0 0 1-6.464-4.309a.5.5 0 0 1 .474-.692a5.99 5.99 0 0 0 4.826-2.454L1.147 1.854a.5.5 0 0 1 0-.708M8.003 1a7 7 0 0 1 5.893 10.774L7.77 5.648a6 6 0 0 0-.229-3.956A.5.5 0 0 1 8.003 1");
}
</style><path class="g46ngkbec"/>`,
		"fallback": "fluent:weather-moon-off-16-filled",
	});
}

export default Component;
