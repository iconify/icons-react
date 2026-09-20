import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ldbkzccqg {
  fill: currentColor;
  d: path("M222 98.47V96a54.06 54.06 0 0 0-54-54h-8a14 14 0 0 0-14 14v122h-20V72a6 6 0 0 0-6-6H16A14 14 0 0 0 2 80v104a30 30 0 0 0 54 18a30 30 0 0 0 53.4-12h85.2a30 30 0 0 0 59.4-6v-48a38.07 38.07 0 0 0-32-37.53M158 56a2 2 0 0 1 2-2h8a42 42 0 0 1 42 42v8a6 6 0 0 0 6 6a26 26 0 0 1 26 26v24a30 30 0 0 0-47.4 18H158ZM16 78h98v100h-4.6A30 30 0 0 0 56 166a30 30 0 0 0-42-6V80a2 2 0 0 1 2-2m16 124a18 18 0 1 1 18-18a18 18 0 0 1-18 18m48 0a18 18 0 1 1 18-18a18 18 0 0 1-18 18m144 0a18 18 0 1 1 18-18a18 18 0 0 1-18 18");
}
</style><path class="ldbkzccqg"/>`,
		"fallback": "ph:truck-trailer-light",
	});
}

export default Component;
