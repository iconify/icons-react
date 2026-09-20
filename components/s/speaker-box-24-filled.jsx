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
		"content": `<style>.ledxs3bao {
  fill: currentColor;
  d: path("M4 5.25A3.25 3.25 0 0 1 7.25 2h9.5A3.25 3.25 0 0 1 20 5.25v13.5A3.25 3.25 0 0 1 16.75 22h-9.5A3.25 3.25 0 0 1 4 18.75zm8 7.25a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-3.5 2a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0M12 9a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3");
}
</style><path class="ledxs3bao"/>`,
		"fallback": "fluent:speaker-box-24-filled",
	});
}

export default Component;
