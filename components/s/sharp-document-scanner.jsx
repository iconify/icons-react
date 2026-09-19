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
		"content": `<style>.kfzufdbnh {
  fill: currentColor;
  d: path("M7 3H4v3H2V1h5zm15 3V1h-5v2h3v3zM7 21H4v-3H2v5h5zm13-3v3h-3v2h5v-5zM19 4v16H5V4zm-4 4H9v2h6zm0 3H9v2h6zm0 3H9v2h6z");
}
</style><path class="kfzufdbnh"/>`,
		"fallback": "ic:sharp-document-scanner",
	});
}

export default Component;
