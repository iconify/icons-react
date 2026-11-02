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
		"content": `<style>.yk_4r9bnt {
  fill: currentColor;
  d: path("M8.894 7.447a1 1 0 1 1-1.788-.894l1-2a1 1 0 1 1 1.788.894Zm4 0a1 1 0 1 1-1.788-.894l1-2a1 1 0 1 1 1.788.894Zm4 0a1 1 0 1 1-1.788-.894l1-2a1 1 0 1 1 1.788.894Zm5.034-1.076L20.477 10H21a1 1 0 0 1 1 1c0 5.523-4.477 10-10 10S2 16.523 2 11a1 1 0 0 1 1-1h15.323l1.749-4.371a.998.998 0 1 1 1.856.742M19.228 10a1 1 0 0 0 1.03 0Z");
}
</style><path class="yk_4r9bnt"/>`,
		"fallback": "coolicons:soup-fill-sharp",
	});
}

export default Component;
