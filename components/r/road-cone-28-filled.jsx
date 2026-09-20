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
		"content": `<style>.f9-oi_b-s {
  fill: currentColor;
  d: path("M12.982 2a1.25 1.25 0 0 0-1.206.92L8.67 14.25h6.58a.75.75 0 0 1 0 1.5H8.259l-.686 2.5h8.677a.75.75 0 0 1 0 1.5H7.162L5.86 24.5H3.083a.75.75 0 0 0 0 1.5h21.833a.75.75 0 1 0 0-1.5h-2.775L16.225 2.92A1.25 1.25 0 0 0 15.019 2z");
}
</style><path class="f9-oi_b-s"/>`,
		"fallback": "fluent:road-cone-28-filled",
	});
}

export default Component;
