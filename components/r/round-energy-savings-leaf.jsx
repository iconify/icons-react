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
		"content": `<style>.atakeybab {
  fill: currentColor;
  d: path("M12 3c-4.8 0-9 3.86-9 9c0 2.12.74 4.07 1.97 5.61l-1.68 1.68A.996.996 0 1 0 4.7 20.7l1.68-1.68A8.96 8.96 0 0 0 12 21c2.3 0 4.61-.88 6.36-2.64A8.95 8.95 0 0 0 21 12V5c0-1.1-.9-2-2-2zm3.83 9.26l-5.16 4.63c-.16.15-.41.14-.56-.01a.4.4 0 0 1-.04-.52l2.44-3.33l-4.05-.4a.514.514 0 0 1-.3-.89l5.16-4.63c.16-.15.41-.14.56.01c.14.14.16.36.04.52l-2.44 3.33l4.05.4c.45.04.63.59.3.89");
}
</style><path class="atakeybab"/>`,
		"fallback": "ic:round-energy-savings-leaf",
	});
}

export default Component;
