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
		"content": `<style>.agkb49b-d {
  fill: currentColor;
  d: path("M7.48 19V9.5h10.605l-2.1-2.1l.707-.708L20 10l-3.308 3.308l-.707-.708l2.1-2.1H8.48V19z");
}
</style><path class="agkb49b-d"/>`,
		"fallback": "material-symbols-light:turn-right-outline-sharp",
	});
}

export default Component;
