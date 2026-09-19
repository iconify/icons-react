import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au28p2riu.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au28p2riu"/>`,
		"fallback": "f7:light-max",
	});
}

export default Component;
