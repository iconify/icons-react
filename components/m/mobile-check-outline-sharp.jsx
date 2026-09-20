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
		"content": `<style>.mn3f-2jlu {
  fill: currentColor;
  d: path("m11.05 14.308l4.258-4.258l-.708-.708l-3.55 3.55l-1.4-1.4l-.708.708zM6 22V2h12.077v4.83H19v3.686h-.923V22zm1-1h10.077V3H7zm0 0V3z");
}
</style><path class="mn3f-2jlu"/>`,
		"fallback": "material-symbols-light:mobile-check-outline-sharp",
	});
}

export default Component;
