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
		"content": `<style>.ujic83bgb {
  fill: currentColor;
  d: path("M8 21v-2H2V3h20v16h-6v2z");
}
</style><path class="ujic83bgb"/>`,
		"fallback": "material-symbols:tv-sharp",
	});
}

export default Component;
