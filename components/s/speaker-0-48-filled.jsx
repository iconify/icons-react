import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m0hnk0bik {
  fill: currentColor;
  d: path("M25.081 6.419C26.208 5.408 28 6.207 28 7.72v32.56c0 1.514-1.792 2.313-2.919 1.302l-8.206-7.366A4.75 4.75 0 0 0 13.702 33H9a5.25 5.25 0 0 1-5.25-5.25v-7.5C3.75 17.35 6.1 15 9 15h4.702a4.75 4.75 0 0 0 3.173-1.216z");
}
</style><path class="m0hnk0bik"/>`,
		"fallback": "fluent:speaker-0-48-filled",
	});
}

export default Component;
