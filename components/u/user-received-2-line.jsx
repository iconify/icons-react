import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeuan0b3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeuan0b3y"/>`,
		"fallback": "ri:user-received-2-line",
	});
}

export default Component;
