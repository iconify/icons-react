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
		"content": `<style>.ytpo3r7ao {
  fill: currentColor;
  d: path("M5 5.75A.75.75 0 0 1 5.75 5h12.5a.75.75 0 0 1 0 1.5H5.75A.75.75 0 0 1 5 5.75m0 4A.75.75 0 0 1 5.75 9h12.5a.75.75 0 0 1 0 1.5H5.75A.75.75 0 0 1 5 9.75m0 4a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H5.75a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H5.75a.75.75 0 0 1-.75-.75");
}
</style><path class="ytpo3r7ao"/>`,
		"fallback": "fluent:text-column-one-24-regular",
	});
}

export default Component;
