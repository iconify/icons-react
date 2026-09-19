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
		"content": `<style>.dy76dkb7p {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z");
}
</style><path class="dy76dkb7p"/>`,
		"fallback": "ic:sharp-greater-than",
	});
}

export default Component;
