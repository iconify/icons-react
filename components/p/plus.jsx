import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jky9q57sn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jky9q57sn"/>`,
		"fallback": "iconoir:plus",
	});
}

export default Component;
