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
		"content": `<style>.u8q-hpbds {
  fill: currentColor;
  d: path("M16.5 18V6h2v12zm-11 0V6l9 6z");
}
</style><path class="u8q-hpbds"/>`,
		"fallback": "material-symbols:skip-next",
	});
}

export default Component;
