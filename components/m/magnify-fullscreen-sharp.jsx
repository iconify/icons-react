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
		"content": `<style>.bfhqw6b6d {
  fill: currentColor;
  d: path("M2 20V4h20v16zm12-6h2v-2h2v-2h-2V8h-2v2h-2v2h2z");
}
</style><path class="bfhqw6b6d"/>`,
		"fallback": "material-symbols:magnify-fullscreen-sharp",
	});
}

export default Component;
