import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w91-9k59o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w91-9k59o"/>`,
		"fallback": "tdesign:roast-filled",
	});
}

export default Component;
