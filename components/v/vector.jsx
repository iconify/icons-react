import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbdrlqb3x.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbdrlqb3x"/>`,
		"fallback": "simple-line-icons:vector",
	});
}

export default Component;
