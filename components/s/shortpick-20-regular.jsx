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
		"content": `<style>.qcd-2ozie {
  fill: currentColor;
  d: path("M7 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.5a.5.5 0 0 0 0-1H7V3h.5a.5.5 0 0 0 0-1zm2.5 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h.5v2h-.5a.5.5 0 0 0 0 1h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-3 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM5 7.5a.5.5 0 0 0-1 0v8A2.5 2.5 0 0 0 6.5 18h7a2.5 2.5 0 0 0 2.5-2.5v-8a.5.5 0 0 0-1 0v8a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 5 15.5zM7 12a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm0 1h6v2H7zM6 8a1 1 0 0 1 1-1h.5a.5.5 0 0 1 0 1H7v2h.5a.5.5 0 0 1 0 1H7a1 1 0 0 1-1-1zm3-.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.5a.5.5 0 0 1 0-1h.5V8h-.5a.5.5 0 0 1-.5-.5m-3 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5");
}
</style><path class="qcd-2ozie"/>`,
		"fallback": "fluent:shortpick-20-regular",
	});
}

export default Component;
