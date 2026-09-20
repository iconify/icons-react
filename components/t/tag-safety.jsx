import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkbhseb7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkbhseb7s"/>`,
		"fallback": "ix:tag-safety",
	});
}

export default Component;
