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
		"content": `<style>.fodpth3qq {
  fill: currentColor;
  d: path("m11.477 11.109l6.816-6.816v-.001l2-1.999a.999.999 0 1 1 1.414 1.414L20.414 5l1.293 1.293a.999.999 0 1 1-1.414 1.414L19 6.414L17.414 8l1.293 1.293a.999.999 0 1 1-1.414 1.414L16 9.414l-3.109 3.109a6 6 0 1 1-1.414-1.414");
}
</style><path class="fodpth3qq"/>`,
		"fallback": "coolicons:key-fill-sharp",
	});
}

export default Component;
