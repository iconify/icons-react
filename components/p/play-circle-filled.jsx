import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua3yv8b8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua3yv8b8y"/>`,
		"fallback": "griddy-icons:play-circle-filled",
	});
}

export default Component;
