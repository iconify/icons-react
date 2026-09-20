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
		"content": `<style>.tmdsbwb7y {
  fill: currentColor;
  d: path("M216.43 39.6a53.27 53.27 0 0 0-75.33 0L39.6 141.09a53.26 53.26 0 0 0 75.32 75.31l101.51-101.49a53.32 53.32 0 0 0 0-75.31m-11.32 64l-50.75 50.74l-52.69-52.68l50.75-50.75a37.26 37.26 0 0 1 52.69 52.69m-15.43-21.26a8 8 0 0 1 0 11.32l-24 24a8 8 0 1 1-11.31-11.32l24-24a8 8 0 0 1 11.31 0");
}
</style><path class="tmdsbwb7y"/>`,
		"fallback": "ph:pill-fill",
	});
}

export default Component;
