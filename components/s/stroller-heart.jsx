import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmee7jb3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmee7jb3y"/>`,
		"fallback": "noviair-light:stroller-heart",
	});
}

export default Component;
