import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7ovb7b3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7ovb7b3o"/>`,
		"fallback": "octicon:person-add-24",
	});
}

export default Component;
