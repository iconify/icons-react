import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr9fqs4ir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mr9fqs4ir"/>`,
		"fallback": "reicon:ticket-expired-filled",
	});
}

export default Component;
