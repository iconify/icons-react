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
		"content": `<style>.cm89s6bls {
  fill: currentColor;
  d: path("m20.385 8.673l-9 3.75a1 1 0 1 1-.77-1.846L13 9.584V5.917l-2.385-.994a1 1 0 0 1 .77-1.846l9 3.75a1 1 0 0 1 0 1.846M15 8.75l2.4-1l-2.4-1zM8 4a1 1 0 0 0-2 0v13.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0-1.414-1.414L8 17.586zm8 9a1 1 0 0 0-1 1v3.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0-1.414-1.414l-.293.293V14a1 1 0 0 0-1-1");
}
</style><path class="cm89s6bls"/>`,
		"fallback": "fluent:text-direction-rotate-90-ltr-24-filled",
	});
}

export default Component;
