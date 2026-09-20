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
		"content": `<style>.ah0k7d1-t {
  fill: currentColor;
  d: path("M8.5 2.5a1 1 0 1 0-2 0V6H3a1 1 0 0 0 0 2h3.5v3.5a1 1 0 1 0 2 0V8H12a1 1 0 1 0 0-2H8.5zM16 6a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2zm0 13a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2zm4.75-1a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.5 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M2.293 15.293a1 1 0 0 1 1.414 0L7.5 19.086l3.793-3.793a1 1 0 1 1 1.414 1.414L8.914 20.5l3.793 3.793a1 1 0 0 1-1.414 1.414L7.5 21.914l-3.793 3.793a1 1 0 0 1-1.414-1.414L6.086 20.5l-3.793-3.793a1 1 0 0 1 0-1.414");
}
</style><path class="ah0k7d1-t"/>`,
		"fallback": "fluent:math-symbols-28-filled",
	});
}

export default Component;
