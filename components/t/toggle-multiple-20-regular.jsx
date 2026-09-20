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
		"content": `<style>.kgmg8wb8i {
  fill: currentColor;
  d: path("M8 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-5 0A3.5 3.5 0 0 0 6.5 9h7a3.5 3.5 0 1 0 0-7h-7A3.5 3.5 0 0 0 3 5.5M6.5 3h7a2.5 2.5 0 0 1 0 5h-7a2.5 2.5 0 0 1 0-5m7 13a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M3 14.5A3.5 3.5 0 0 0 6.5 18h7a3.5 3.5 0 1 0 0-7h-7A3.5 3.5 0 0 0 3 14.5M6.5 12h7a2.5 2.5 0 0 1 0 5h-7a2.5 2.5 0 0 1 0-5");
}
</style><path class="kgmg8wb8i"/>`,
		"fallback": "fluent:toggle-multiple-20-regular",
	});
}

export default Component;
