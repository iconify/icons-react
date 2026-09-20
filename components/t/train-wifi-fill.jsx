import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqdjhp2zf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqdjhp2zf"/>`,
		"fallback": "ri:train-wifi-fill",
	});
}

export default Component;
