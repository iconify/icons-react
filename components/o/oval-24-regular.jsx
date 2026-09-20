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
		"content": `<style>.mjyfqsbbl {
  fill: currentColor;
  d: path("M2 12a8 8 0 0 1 8-8h4a8 8 0 1 1 0 16h-4a8 8 0 0 1-8-8m8-6.5a6.5 6.5 0 0 0 0 13h4a6.5 6.5 0 1 0 0-13z");
}
</style><path class="mjyfqsbbl"/>`,
		"fallback": "fluent:oval-24-regular",
	});
}

export default Component;
