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
		"content": `<style>.n4--qac4j {
  fill: currentColor;
  d: path("m14.354 11.354l-4.5 4.5a.5.5 0 0 1-.708 0l-4.5-4.5a.5.5 0 0 1 .708-.708L9 14.293V4.5a.5.5 0 0 1 1 0v9.793l3.646-3.647a.5.5 0 0 1 .708.708M3.5 3a.5.5 0 0 1 0-1h12a.5.5 0 0 1 0 1zm0 15a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1zm3 0a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1zm4 0a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1zm4 0a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1z");
}
</style><path class="n4--qac4j"/>`,
		"fallback": "fluent:padding-down-20-regular",
	});
}

export default Component;
