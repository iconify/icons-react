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
		"content": `<style>.ja1hrbbqb {
  fill: currentColor;
  d: path("M9 17h9v-3H9zm-6 4V3h18v18z");
}
</style><path class="ja1hrbbqb"/>`,
		"fallback": "material-symbols:position-bottom-right-sharp",
	});
}

export default Component;
