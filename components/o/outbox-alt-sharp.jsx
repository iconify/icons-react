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
		"content": `<style>.tn9fb5bmk {
  fill: currentColor;
  d: path("m6 18l12-6L6 6v4.35L11 12l-5 1.65zm-3 3V3h18v18z");
}
</style><path class="tn9fb5bmk"/>`,
		"fallback": "material-symbols:outbox-alt-sharp",
	});
}

export default Component;
