import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewm7bp3sn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewm7bp3sn"/>`,
		"fallback": "iconaut:medal-solid",
	});
}

export default Component;
