import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt2ljxb7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt2ljxb7z"/>`,
		"fallback": "mingcute:report-forms-fill",
	});
}

export default Component;
