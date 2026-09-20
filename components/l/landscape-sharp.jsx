import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vzekrdboh {
  fill: currentColor;
  d: path("m1 18l6-8l4.5 6h2.525l-3.775-5L14 6l9 12z");
}
</style><path class="vzekrdboh"/>`,
		"fallback": "material-symbols:landscape-sharp",
	});
}

export default Component;
