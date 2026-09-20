import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfuo8065l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfuo8065l"/>`,
		"fallback": "ri:octagon-line",
	});
}

export default Component;
