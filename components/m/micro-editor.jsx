import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqhpp2a5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqhpp2a5l"/>`,
		"fallback": "thesvg-color:micro-editor",
	});
}

export default Component;
