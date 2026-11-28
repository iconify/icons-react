import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi83habxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zi83habxq"/>`,
		"fallback": "iconaut:sidebar-right-collapse-solid",
	});
}

export default Component;
