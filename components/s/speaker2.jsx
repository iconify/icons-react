import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh5jy1blp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nh5jy1blp"/>`,
		"fallback": "reicon:speaker2",
	});
}

export default Component;
