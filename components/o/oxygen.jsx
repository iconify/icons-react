import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xch5ldbgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xch5ldbgi"/>`,
		"fallback": "thesvg-color:oxygen",
	});
}

export default Component;
