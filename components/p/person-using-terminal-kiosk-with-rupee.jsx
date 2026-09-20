import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmrzg-4tc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmrzg-4tc"/>`,
		"fallback": "pinhead:person-using-terminal-kiosk-with-rupee",
	});
}

export default Component;
