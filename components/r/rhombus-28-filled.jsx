import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tv6tk0ben {
  fill: currentColor;
  d: path("M6.555 5.928A3 3 0 0 1 9.357 4h14.638c2.103 0 3.553 2.107 2.802 4.072l-5.354 14A3 3 0 0 1 18.641 24H4.003C1.9 24 .45 21.893 1.2 19.928z");
}
</style><path class="tv6tk0ben"/>`,
		"fallback": "fluent:rhombus-28-filled",
	});
}

export default Component;
