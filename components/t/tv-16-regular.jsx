import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tyhhr3irs {
  fill: currentColor;
  d: path("M4 3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM3 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm1.5 7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z");
}
</style><path class="tyhhr3irs"/>`,
		"fallback": "fluent:tv-16-regular",
	});
}

export default Component;
