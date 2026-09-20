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
		"content": `<style>.q7pvm1bno {
  fill: currentColor;
  d: path("M14.5 18q-.402 0-.701-.299T13.5 17V7q0-.402.299-.701T14.5 6H17q.402 0 .701.299T18 7v10q0 .402-.299.701T17 18zM7 18q-.402 0-.701-.299T6 17V7q0-.402.299-.701T7 6h2.5q.402 0 .701.299T10.5 7v10q0 .402-.299.701T9.5 18zm7.5-1H17V7h-2.5zM7 17h2.5V7H7zM7 7v10zm7.5 0v10z");
}
</style><path class="q7pvm1bno"/>`,
		"fallback": "material-symbols-light:pause-outline-rounded",
	});
}

export default Component;
