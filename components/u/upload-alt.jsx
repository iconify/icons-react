import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldc4q4jfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldc4q4jfs"/>`,
		"fallback": "uis:upload-alt",
	});
}

export default Component;
