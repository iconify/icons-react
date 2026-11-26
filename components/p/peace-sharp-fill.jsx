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
		"content": `<style>.ljopsd3ov {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M23 12C23 18.0751 18.0751 23 12 23C5.9249 23 1 18.0751 1 12C1 5.9249 5.9249 1 12 1C18.0751 1 23 5.9249 23 12ZM13 14.4142L17.6569 19.0711L19.0711 17.6569L13 11.5858L13 3L11 3L11 11.5858L4.9289 17.6569L6.3431 19.0711L11 14.4142L11 21L13 21Z");
}
</style><path clip-rule="evenodd" class="ljopsd3ov"/>`,
		"fallback": "keyline-icons:peace-sharp-fill",
	});
}

export default Component;
