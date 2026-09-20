import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzlg-u0et.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzlg-u0et"/>`,
		"fallback": "mdi:monitor-off",
	});
}

export default Component;
