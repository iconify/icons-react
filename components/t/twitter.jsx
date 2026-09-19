import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh3gsqb4d.css';

const viewBox = {"width":748.681,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh3gsqb4d"/>`,
		"fallback": "brandico:twitter",
	});
}

export default Component;
