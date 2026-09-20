import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov6vt9tgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ov6vt9tgl"/>`,
		"fallback": "reicon:usb",
	});
}

export default Component;
