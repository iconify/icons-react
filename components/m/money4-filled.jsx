import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdfne-b5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdfne-b5o"/>`,
		"fallback": "reicon:money4-filled",
	});
}

export default Component;
