import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwl_y62-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwl_y62-a"/>`,
		"fallback": "mynaui:toggle-right-solid",
	});
}

export default Component;
