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
		"content": `<style>.cm01wsb_l {
  fill: currentColor;
  d: path("M25.06 4.44a1.5 1.5 0 0 0-2.12 0l-11.5 11.5a1.5 1.5 0 0 0 2.12 2.12l8.94-8.939V30.5a1.5 1.5 0 0 0 3 0V9.121l8.94 8.94a1.5 1.5 0 0 0 2.12-2.122zM7.5 22A1.5 1.5 0 0 1 9 23.5v12a3.5 3.5 0 0 0 3.5 3.5h23a3.5 3.5 0 0 0 3.5-3.5v-12a1.5 1.5 0 0 1 3 0v12a6.5 6.5 0 0 1-6.5 6.5h-23A6.5 6.5 0 0 1 6 35.5v-12A1.5 1.5 0 0 1 7.5 22");
}
</style><path class="cm01wsb_l"/>`,
		"fallback": "fluent:share-ios-48-filled",
	});
}

export default Component;
