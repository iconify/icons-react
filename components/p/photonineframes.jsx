import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp7pa0bqb.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp7pa0bqb"/>`,
		"fallback": "whh:photonineframes",
	});
}

export default Component;
