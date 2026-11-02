import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc_7y66bs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zc_7y66bs"/>`,
		"fallback": "mingcute:search-2-fill",
	});
}

export default Component;
