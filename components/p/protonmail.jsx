import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmn5w0e9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmn5w0e9y"/>`,
		"fallback": "simple-icons:protonmail",
	});
}

export default Component;
