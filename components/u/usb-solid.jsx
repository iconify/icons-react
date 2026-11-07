import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h15mlj49b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h15mlj49b"/>`,
		"fallback": "sidekickicons:usb-solid",
	});
}

export default Component;
