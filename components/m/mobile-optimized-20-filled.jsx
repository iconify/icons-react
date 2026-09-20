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
		"content": `<style>.r1lhwv53n {
  fill: currentColor;
  d: path("M4.5 2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H4V2.5a.5.5 0 0 1 .5-.5m11 0a.5.5 0 0 1 .5.5V4h1.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5m-11 16a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0 0 1H4v1.5a.5.5 0 0 0 .5.5m11 0a.5.5 0 0 0 .5-.5V16h1.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5M6 6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm2 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m0 2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5");
}
</style><path class="r1lhwv53n"/>`,
		"fallback": "fluent:mobile-optimized-20-filled",
	});
}

export default Component;
