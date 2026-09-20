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
		"content": `<style>.tefv-8bar {
  fill: currentColor;
  d: path("M3.708 17.096L3 16.39l6.304-6.354l4 4l6.027-5.939H16v-1h5v5h-1V8.804L13.304 15.5l-4-4z");
}
</style><path class="tefv-8bar"/>`,
		"fallback": "material-symbols-light:trending-up-sharp",
	});
}

export default Component;
