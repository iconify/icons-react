import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebuhi1bwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebuhi1bwn"/>`,
		"fallback": "boxicons:vertical-align-center-filled",
	});
}

export default Component;
