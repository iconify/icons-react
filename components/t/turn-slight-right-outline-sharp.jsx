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
		"content": `<style>.jeg4hwboi {
  fill: currentColor;
  d: path("M9.5 19.77v-7.69L15.6 6h-2.98V5h4.669v4.67h-1V6.688l-5.789 5.77v7.311z");
}
</style><path class="jeg4hwboi"/>`,
		"fallback": "material-symbols-light:turn-slight-right-outline-sharp",
	});
}

export default Component;
