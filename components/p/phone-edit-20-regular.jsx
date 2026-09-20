import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sjj0i_bwp {
  fill: currentColor;
  d: path("m15.81 1.548l-4.83 4.83a2.2 2.2 0 0 0-.578 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.078l1.498-.374a2.2 2.2 0 0 0 1.02-.578l4.83-4.83a1.87 1.87 0 0 0-2.645-2.644M12.942 3l.84-.84A2 2 0 0 0 13 2H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9.06l-.668.67a3 3 0 0 1-.332.288V16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM9 14a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z");
}
</style><path class="sjj0i_bwp"/>`,
		"fallback": "fluent:phone-edit-20-regular",
	});
}

export default Component;
