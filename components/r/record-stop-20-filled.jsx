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
		"content": `<style>.imhs6dbhp {
  fill: currentColor;
  d: path("M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16M8 7h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1");
}
</style><path class="imhs6dbhp"/>`,
		"fallback": "fluent:record-stop-20-filled",
	});
}

export default Component;
