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
		"content": `<style>.is239cbum {
  fill: currentColor;
  d: path("M17 6v8.17l2 2V3c0-1.1-.9-1.99-2-1.99L7 1c-.85 0-1.58.55-1.87 1.3L8.83 6zM7 3h10v1H7zm14.19 18.19L19 19l-2-2L7 7L5 5L2.81 2.81L1.39 4.22L5 7.83V21c0 1.1.9 2 2 2h10c.85 0 1.58-.55 1.87-1.3l.91.91zM17 21H7v-1h10zM7 18V9.83L15.17 18z");
}
</style><path class="is239cbum"/>`,
		"fallback": "ic:outline-no-cell",
	});
}

export default Component;
