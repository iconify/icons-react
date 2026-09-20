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
		"content": `<style>.tjik5vbpq {
  fill: currentColor;
  d: path("M8 4.5a.5.5 0 0 1 .5-.5h21a.5.5 0 0 1 0 1h-21a.5.5 0 0 1-.5-.5m0 22a.5.5 0 0 1 .5-.5h21a.5.5 0 0 1 0 1h-21a.5.5 0 0 1-.5-.5M18.5 11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm-.5 8.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m-9 4a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15m1-12.25a.75.75 0 0 0-1.5 0V15H4.75a.75.75 0 0 0 0 1.5H8.5v3.75a.75.75 0 0 0 1.5 0V16.5h3.75a.75.75 0 0 0 0-1.5H10z");
}
</style><path class="tjik5vbpq"/>`,
		"fallback": "fluent:text-expand-32-light",
	});
}

export default Component;
