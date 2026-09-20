import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh_qdbcvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh_qdbcvr"/>`,
		"fallback": "mynaui:search-plus-solid",
	});
}

export default Component;
