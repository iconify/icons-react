import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udyu9pxgk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="udyu9pxgk"/>`,
		"fallback": "ix:plc-device-user-data-type",
	});
}

export default Component;
