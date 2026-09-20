import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqc487bpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqc487bpr"/>`,
		"fallback": "si:segment-fill",
	});
}

export default Component;
