import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yprqjz2uq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yprqjz2uq"/>`,
		"fallback": "simple-icons:softcatala",
	});
}

export default Component;
