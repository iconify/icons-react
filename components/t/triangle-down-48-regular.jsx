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
		"content": `<style>.krnjl9bzi {
  fill: currentColor;
  d: path("M22.241 39.566c.652 1.238 2.422 1.248 3.088.017l15.954-29.501a1.75 1.75 0 0 0-1.54-2.583H8.256a1.75 1.75 0 0 0-1.549 2.565zm5.287 1.206c-1.617 2.99-5.915 2.966-7.499-.041L4.495 11.229C3.005 8.4 5.057 5 8.255 5h31.488c3.22 0 5.27 3.44 3.739 6.272z");
}
</style><path class="krnjl9bzi"/>`,
		"fallback": "fluent:triangle-down-48-regular",
	});
}

export default Component;
