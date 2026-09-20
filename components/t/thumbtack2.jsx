import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v07u4ip-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v07u4ip-l"/>`,
		"fallback": "reicon:thumbtack2",
	});
}

export default Component;
