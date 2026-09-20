import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jrio6dbqs {
  fill: currentColor;
  d: path("M4.344 4.343a.5.5 0 0 1 .707.707a7 7 0 0 0 0 9.9a.5.5 0 0 1-.707.707a8 8 0 0 1 0-11.314m10.607 0a.5.5 0 0 1 .707 0a8 8 0 0 1 0 11.313a.5.5 0 1 1-.707-.707a7 7 0 0 0 0-9.899a.5.5 0 0 1 0-.707M6.287 6.287a.5.5 0 0 1 .707.707a4.25 4.25 0 0 0 0 6.011a.5.5 0 0 1-.707.707a5.25 5.25 0 0 1 0-7.425m6.717 0a.5.5 0 0 1 .707 0a5.25 5.25 0 0 1 0 7.425a.501.501 0 0 1-.707-.707a4.25 4.25 0 0 0 0-6.01a.5.5 0 0 1 0-.708M10 8.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5");
}
</style><path class="jrio6dbqs"/>`,
		"fallback": "fluent:live-20-regular",
	});
}

export default Component;
