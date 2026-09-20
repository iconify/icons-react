import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltsx_kb3q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltsx_kb3q"/>`,
		"fallback": "roentgen:p-arrow-right",
	});
}

export default Component;
