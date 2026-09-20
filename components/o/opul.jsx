import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj6p8koql.css';
import '../../css/m/m_pzdih5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj6p8koql"/><path class="m_pzdih5e"/>`,
		"fallback": "token:opul",
	});
}

export default Component;
