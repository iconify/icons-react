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
		"content": `<style>.aig44hb1s {
  fill: currentColor;
  d: path("M12.246 4.75a.75.75 0 0 0-1.5 0v1.858l-1.764-.573a.75.75 0 1 0-.464 1.426l1.768.575L9.194 9.54a.75.75 0 0 0 1.214.882l1.09-1.502l1.092 1.502a.75.75 0 1 0 1.213-.882L12.71 8.037l1.771-.576a.75.75 0 1 0-.463-1.426l-1.772.575zM6.5 16a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3");
}
</style><path class="aig44hb1s"/>`,
		"fallback": "fluent:text-period-asterisk-20-filled",
	});
}

export default Component;
