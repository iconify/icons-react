import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nwfoefbtd {
  fill: currentColor;
  d: path("M20 7.5q.001.553.128 1.068l-9.15 4.575a4.5 4.5 0 1 0 0 5.713l9.15 4.576Q20 23.947 20 24.5a4.5 4.5 0 1 0 1.023-2.857l-9.15-4.575a4.5 4.5 0 0 0 0-2.136l9.15-4.575A4.5 4.5 0 1 0 20 7.5");
}
</style><path class="nwfoefbtd"/>`,
		"fallback": "fluent:share-android-32-filled",
	});
}

export default Component;
