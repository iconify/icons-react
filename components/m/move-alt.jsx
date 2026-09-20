import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txxrw9wmx.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txxrw9wmx"/>`,
		"fallback": "jam:move-alt",
	});
}

export default Component;
