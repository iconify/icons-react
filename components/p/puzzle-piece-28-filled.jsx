import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ax3uyjb-c {
  fill: currentColor;
  d: path("M15 2a3 3 0 0 0-3 3v1H9.25A2.25 2.25 0 0 0 7 8.25V11H6a3 3 0 1 0 0 6h1v2.75A2.25 2.25 0 0 0 9.25 22H12v1a3 3 0 1 0 6 0v-1h2.75A2.25 2.25 0 0 0 23 19.75V16h-2a2 2 0 1 1 0-4h2V8.25A2.25 2.25 0 0 0 20.75 6H18V5a3 3 0 0 0-3-3");
}
</style><path class="ax3uyjb-c"/>`,
		"fallback": "fluent:puzzle-piece-28-filled",
	});
}

export default Component;
