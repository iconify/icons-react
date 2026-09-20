import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn3mazb6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gn3mazb6u"/>`,
		"fallback": "reicon:more-square-filled",
	});
}

export default Component;
