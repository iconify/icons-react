import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p97equ_db.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p97equ_db"/>`,
		"fallback": "thesvg-color:mailbox",
	});
}

export default Component;
