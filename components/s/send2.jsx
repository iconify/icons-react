import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo2nz1lwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo2nz1lwn"/>`,
		"fallback": "reicon:send2",
	});
}

export default Component;
