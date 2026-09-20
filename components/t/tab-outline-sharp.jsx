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
		"content": `<style>.m4odjybkx {
  fill: currentColor;
  d: path("M4 18h16v-8h-7V6H4zm-2 2V4h20v16zm2-2V6z");
}
</style><path class="m4odjybkx"/>`,
		"fallback": "material-symbols:tab-outline-sharp",
	});
}

export default Component;
