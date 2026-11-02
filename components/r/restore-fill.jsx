import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpl9kmb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpl9kmb1z"/>`,
		"fallback": "mingcute:restore-fill",
	});
}

export default Component;
