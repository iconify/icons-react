import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mywlo63po.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mywlo63po"/>`,
		"fallback": "noviair-light:message-off",
	});
}

export default Component;
