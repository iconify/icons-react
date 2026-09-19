import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxo_xnd6q.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxo_xnd6q"/>`,
		"fallback": "dinkie-icons:language-greek-small-filled",
	});
}

export default Component;
