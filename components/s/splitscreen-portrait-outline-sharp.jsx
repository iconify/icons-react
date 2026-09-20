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
		"content": `<style>.x4_k08bac {
  fill: currentColor;
  d: path("M8 18h8v-5H8zm0-7h8V6H8zM4 22V2h16v20zm2-2h12V4H6zM18 4H6z");
}
</style><path class="x4_k08bac"/>`,
		"fallback": "material-symbols:splitscreen-portrait-outline-sharp",
	});
}

export default Component;
