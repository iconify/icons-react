import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt9-rls8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt9-rls8z"/>`,
		"fallback": "mingcute:seat-heated-fill",
	});
}

export default Component;
