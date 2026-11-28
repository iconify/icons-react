import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbryc8qgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbryc8qgw"/>`,
		"fallback": "iconaut:scooter-solid",
	});
}

export default Component;
