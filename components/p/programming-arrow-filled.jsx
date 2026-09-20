import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urlgr2eji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urlgr2eji"/>`,
		"fallback": "reicon:programming-arrow-filled",
	});
}

export default Component;
