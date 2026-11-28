import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu7vai-4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu7vai-4z"/>`,
		"fallback": "noviair:ship-x",
	});
}

export default Component;
