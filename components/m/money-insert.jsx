import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4m37540h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4m37540h"/>`,
		"fallback": "uil:money-insert",
	});
}

export default Component;
