import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exff0k9xs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exff0k9xs"/>`,
		"fallback": "thesvg-color:seafile",
	});
}

export default Component;
