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
		"content": `<style>.jtrq17bci {
  fill: currentColor;
  d: path("M3.28 2.22a.75.75 0 1 0-1.06 1.06l6.297 6.298l-4.526.657c-1.19.173-1.664 1.635-.803 2.473l4.354 4.245l-1.028 5.993c-.203 1.184 1.04 2.087 2.104 1.528L14 21.644l5.382 2.83c1.063.56 2.307-.344 2.103-1.529l-.082-.481l3.316 3.317a.75.75 0 0 0 1.061-1.061zm7.566 5.444l9.679 9.68l-.067-.391l4.354-4.245c.86-.838.385-2.3-.804-2.473l-6.017-.874L15.3 3.908c-.532-1.077-2.069-1.077-2.6 0z");
}
</style><path class="jtrq17bci"/>`,
		"fallback": "fluent:star-off-28-filled",
	});
}

export default Component;
