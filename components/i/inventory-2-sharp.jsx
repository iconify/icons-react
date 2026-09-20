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
		"content": `<style>.c-oku9bdc {
  fill: currentColor;
  d: path("M3 22V9H2V2h20v7h-1v13zM4 7h16V4H4zm5 7h6v-2H9z");
}
</style><path class="c-oku9bdc"/>`,
		"fallback": "material-symbols:inventory-2-sharp",
	});
}

export default Component;
