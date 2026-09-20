import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqv00xlnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqv00xlnk"/>`,
		"fallback": "mdi:numeric-9-box-multiple",
	});
}

export default Component;
