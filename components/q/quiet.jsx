import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whg_0cbbs.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whg_0cbbs"/>`,
		"fallback": "picon:quiet",
	});
}

export default Component;
