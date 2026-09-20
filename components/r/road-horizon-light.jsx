import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lw29w7bts {
  fill: currentColor;
  d: path("M234.94 197.23a6 6 0 0 1-8.17-2.29L156.49 70H134v10a6 6 0 0 1-12 0V70H99.51L29.23 194.94a6 6 0 1 1-10.46-5.88L85.74 70H24a6 6 0 0 1 0-12h208a6 6 0 0 1 0 12h-61.74l67 119.06a6 6 0 0 1-2.32 8.17M128 114a6 6 0 0 0-6 6v16a6 6 0 0 0 12 0v-16a6 6 0 0 0-6-6m0 56a6 6 0 0 0-6 6v16a6 6 0 0 0 12 0v-16a6 6 0 0 0-6-6");
}
</style><path class="lw29w7bts"/>`,
		"fallback": "ph:road-horizon-light",
	});
}

export default Component;
