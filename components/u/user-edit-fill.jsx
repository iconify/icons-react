import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egs3wlbqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egs3wlbqt"/>`,
		"fallback": "mingcute:user-edit-fill",
	});
}

export default Component;
