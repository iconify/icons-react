import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gue-6fjdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gue-6fjdr"/>`,
		"fallback": "ix:maintenance-triangle-filled",
	});
}

export default Component;
