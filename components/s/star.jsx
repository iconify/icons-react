import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xct7y4b7k.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xct7y4b7k"/>`,
		"fallback": "picon:star",
	});
}

export default Component;
