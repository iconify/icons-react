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
		"content": `<style>.q3o9r30ch {
  fill: currentColor;
  d: path("M5.039 20.154v-13H9.5v-3.27L12 1.5l2.5 2.385v7.269h4.462v9zm1-1h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm4.461 8h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm4.462 12h3v-3h-3zm0-4h3v-3h-3z");
}
</style><path class="q3o9r30ch"/>`,
		"fallback": "material-symbols-light:location-city-outline-sharp",
	});
}

export default Component;
