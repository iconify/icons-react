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
		"content": `<style>.v3r1hdcoi {
  fill: currentColor;
  d: path("M6 3a4 4 0 0 0-4 4v2.758a4.5 4.5 0 0 1 2-.73V8a3 3 0 0 1 3-3h8a2 2 0 0 0-2-2zm10 14h-5.879l-1.56-1.56A4.5 4.5 0 0 0 5 9.027V8a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2M4.5 17c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 4.5 17m0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5");
}
</style><path class="v3r1hdcoi"/>`,
		"fallback": "fluent:slide-multiple-search-20-filled",
	});
}

export default Component;
