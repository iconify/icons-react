import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uykqjq0kh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uykqjq0kh"/>`,
		"fallback": "noviair:sidebar-x",
	});
}

export default Component;
