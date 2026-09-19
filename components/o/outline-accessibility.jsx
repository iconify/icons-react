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
		"content": `<style>.aovbt8b1a {
  fill: currentColor;
  d: path("M12 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m9 7h-6v13h-2v-6h-2v6H9V9H3V7h18z");
}
</style><path class="aovbt8b1a"/>`,
		"fallback": "ic:outline-accessibility",
	});
}

export default Component;
