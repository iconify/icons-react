import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvgi-id7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvgi-id7q"/>`,
		"fallback": "ri:money-euro-box-fill",
	});
}

export default Component;
