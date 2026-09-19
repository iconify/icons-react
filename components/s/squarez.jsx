import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7q42soot.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7q42soot"/>`,
		"fallback": "whh:squarez",
	});
}

export default Component;
