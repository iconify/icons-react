import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yv8kk6pdq {
  fill: currentColor;
  d: path("M10.25 2A3.25 3.25 0 0 0 7 5.25v21.5A3.25 3.25 0 0 0 10.25 30h11.5A3.25 3.25 0 0 0 25 26.75V5.25A3.25 3.25 0 0 0 21.75 2zM14 24h4a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2");
}
</style><path class="yv8kk6pdq"/>`,
		"fallback": "fluent:phone-32-filled",
	});
}

export default Component;
