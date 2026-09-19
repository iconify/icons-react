import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpnncd1ki.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpnncd1ki"/>`,
		"fallback": "f7:italic",
	});
}

export default Component;
