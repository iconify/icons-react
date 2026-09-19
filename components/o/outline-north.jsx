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
		"content": `<style>.edwti2b0g {
  fill: currentColor;
  d: path("m5 9l1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7z");
}
</style><path class="edwti2b0g"/>`,
		"fallback": "ic:outline-north",
	});
}

export default Component;
