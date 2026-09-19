import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3mrshbqy.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3mrshbqy"/>`,
		"fallback": "whh:nut",
	});
}

export default Component;
