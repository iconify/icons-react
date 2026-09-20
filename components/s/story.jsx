import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjz9o4bol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjz9o4bol"/>`,
		"fallback": "reicon:story",
	});
}

export default Component;
