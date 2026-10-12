import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gpb7eextq.css';
import '../../css/m/mpf1g8bav.css';
import '../../css/d/dsz7wltjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="gpb7eextq"/><circle class="mpf1g8bav"/><circle class="dsz7wltjy"/></g>`,
		"fallback": "andrsrxn:progress-full",
	});
}

export default Component;
