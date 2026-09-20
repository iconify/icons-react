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
		"content": `<style>.mz-ffqbub {
  fill: currentColor;
  d: path("M16.02 2.036a2 2 0 0 1 1.986 1.997l.008 4.95a2 2 0 0 1-.586 1.417l-.359.359a4.5 4.5 0 1 0-6.31 6.31a2 2 0 0 1-2.79-.038L3.02 12.083a2 2 0 0 1 .002-2.83l6.682-6.665a2 2 0 0 1 1.425-.584zM13 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m3.303 9.596a3.5 3.5 0 1 0-.707.707l2.55 2.55a.5.5 0 1 0 .708-.707zM16 13.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0");
}
</style><path class="mz-ffqbub"/>`,
		"fallback": "fluent:tag-search-20-filled",
	});
}

export default Component;
