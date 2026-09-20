import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoue5rbis.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zoue5rbis"/>`,
		"fallback": "pinhead:person-playing-tennis",
	});
}

export default Component;
