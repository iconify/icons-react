import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am01m168f.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am01m168f"/>`,
		"fallback": "fa7-solid:volcano",
	});
}

export default Component;
