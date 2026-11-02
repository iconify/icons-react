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
		"content": `<style>.av-fufpup {
  fill: currentColor;
  d: path("m13.669 9.498l-2.548 1.912a4.2 4.2 0 0 1 0 1.18l2.548 1.912a4.164 4.164 0 0 1 7.176 4.092a4.162 4.162 0 0 1-7.966-2.184l-2.548-1.912a4.163 4.163 0 1 1 0-4.996l2.548-1.912a4.162 4.162 0 1 1 .79 1.908");
}
</style><path class="av-fufpup"/>`,
		"fallback": "coolicons:share-alt-fill-sharp",
	});
}

export default Component;
