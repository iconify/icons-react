import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dskl14byj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dskl14byj"/>`,
		"fallback": "reicon:male-filled",
	});
}

export default Component;
