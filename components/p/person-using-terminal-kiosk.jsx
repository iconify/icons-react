import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkieu6b1x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkieu6b1x"/>`,
		"fallback": "pinhead:person-using-terminal-kiosk",
	});
}

export default Component;
