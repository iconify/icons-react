import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilua3qblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilua3qblp"/>`,
		"fallback": "thesvg-color:statuspage",
	});
}

export default Component;
