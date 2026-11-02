import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsq_ef9ke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsq_ef9ke"/>`,
		"fallback": "mingcute:quote-left-fill",
	});
}

export default Component;
