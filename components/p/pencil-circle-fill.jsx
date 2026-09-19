import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7ib8hdyy.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7ib8hdyy"/>`,
		"fallback": "f7:pencil-circle-fill",
	});
}

export default Component;
