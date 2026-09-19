import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9y1ewb3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9y1ewb3v"/>`,
		"fallback": "griddy-icons:shield-alert-filled",
	});
}

export default Component;
