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
		"content": `<style>.jhou5kbdz {
  fill: currentColor;
  d: path("M11.5 13.577L17.077 10L11.5 6.423zM6.5 17V3h14v14zm-3 3V6.616h1V19h12.385v1z");
}
</style><path class="jhou5kbdz"/>`,
		"fallback": "material-symbols-light:video-library-sharp",
	});
}

export default Component;
