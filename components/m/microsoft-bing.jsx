import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9z7ahf8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9z7ahf8e"/>`,
		"fallback": "thesvg:microsoft-bing",
	});
}

export default Component;
