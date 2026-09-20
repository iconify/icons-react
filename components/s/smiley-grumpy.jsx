import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmx9skinh.css';
import '../../css/x/xc4hi7hnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmx9skinh"/><path class="xc4hi7hnx"/>`,
		"fallback": "streamline-freehand:smiley-grumpy",
	});
}

export default Component;
