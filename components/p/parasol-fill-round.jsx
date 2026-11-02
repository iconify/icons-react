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
		"content": `<style>.j3ltlzz3h {
  fill: currentColor;
  d: path("m20.447 9.894l-7.105 3.553L16.618 20H21a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h11.382l-2.829-5.658l-7.106 3.552a1 1 0 0 1-1.341-.447C.649 12.535 2.641 6.562 7.553 4.106c4.912-2.457 10.885-.465 13.341 4.447a1 1 0 0 1-.447 1.341");
}
</style><path class="j3ltlzz3h"/>`,
		"fallback": "coolicons:parasol-fill-round",
	});
}

export default Component;
