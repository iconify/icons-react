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
		"content": `<style>.w4f47kb3g {
  fill: currentColor;
  d: path("M12.75 21h5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3h-5zm-1.5-18h-5A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h5z");
}
</style><path class="w4f47kb3g"/>`,
		"fallback": "fluent:layout-column-two-24-filled",
	});
}

export default Component;
