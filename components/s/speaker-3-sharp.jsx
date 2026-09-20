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
		"content": `<style>.e3c8e8bau {
  fill: currentColor;
  d: path("M8 22v-1H4V2h16v19h-4v1z");
}
</style><path class="e3c8e8bau"/>`,
		"fallback": "material-symbols:speaker-3-sharp",
	});
}

export default Component;
