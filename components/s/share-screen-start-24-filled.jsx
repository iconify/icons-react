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
		"content": `<style>.oq-fppb4f {
  fill: currentColor;
  d: path("M4.25 4A2.25 2.25 0 0 0 2 6.25v11.5A2.25 2.25 0 0 0 4.25 20h15.5A2.25 2.25 0 0 0 22 17.75V6.25A2.25 2.25 0 0 0 19.75 4zm8.28 3.465l3.255 3.255a.75.75 0 1 1-1.06 1.06L12.75 9.806v6.447a.75.75 0 1 1-1.5 0V9.808L9.28 11.78a.75.75 0 1 1-1.06-1.06l3.25-3.254a.75.75 0 0 1 1.06 0");
}
</style><path class="oq-fppb4f"/>`,
		"fallback": "fluent:share-screen-start-24-filled",
	});
}

export default Component;
