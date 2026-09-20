import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv1mz-i2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv1mz-i2z"/>`,
		"fallback": "tdesign:notification-filled",
	});
}

export default Component;
