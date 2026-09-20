import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw0kxo5rm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gw0kxo5rm"/>`,
		"fallback": "reicon:sim3",
	});
}

export default Component;
