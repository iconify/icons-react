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
		"content": `<style>.v6qjj7bml {
  fill: currentColor;
  d: path("M3 14v-4h18v4zm11-1h6v-2h-6z");
}
</style><path class="v6qjj7bml"/>`,
		"fallback": "material-symbols-light:sliders-sharp",
	});
}

export default Component;
