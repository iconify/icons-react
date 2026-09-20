import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7ksnmb5u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7ksnmb5u"/>`,
		"fallback": "ooui:list-numbered-ltr",
	});
}

export default Component;
