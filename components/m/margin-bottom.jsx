import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w40h5abuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w40h5abuq"/>`,
		"fallback": "boxicons:margin-bottom",
	});
}

export default Component;
