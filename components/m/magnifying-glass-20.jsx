import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwv90_00a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwv90_00a"/>`,
		"fallback": "garden:magnifying-glass-20",
	});
}

export default Component;
