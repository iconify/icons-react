import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn5kq1bcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn5kq1bcd"/>`,
		"fallback": "mynaui:shovel-solid",
	});
}

export default Component;
