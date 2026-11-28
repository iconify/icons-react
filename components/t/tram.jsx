import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cin4ccc9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cin4ccc9d"/>`,
		"fallback": "noviair:tram",
	});
}

export default Component;
