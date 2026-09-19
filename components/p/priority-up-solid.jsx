import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrps6nbxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qrps6nbxr"/>`,
		"fallback": "iconoir:priority-up-solid",
	});
}

export default Component;
