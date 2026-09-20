import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5w-_6buy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5w-_6buy"/>`,
		"fallback": "uiw:safety",
	});
}

export default Component;
