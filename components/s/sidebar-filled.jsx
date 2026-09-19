import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajhn5acdw.css';
import '../../css/o/occ68iv3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajhn5acdw"/><path class="occ68iv3s"/>`,
		"fallback": "boxicons:sidebar-filled",
	});
}

export default Component;
