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
		"content": `<style>.mod22hbdz {
  fill: currentColor;
  d: path("m3 19l5.5-7L3 4.98h12.462L21 12l-5.52 7zm2-1h10l4.75-6L15 5.98H5L9.75 12zm7.385-6.02");
}
</style><path class="mod22hbdz"/>`,
		"fallback": "material-symbols-light:label-important-outline-sharp",
	});
}

export default Component;
