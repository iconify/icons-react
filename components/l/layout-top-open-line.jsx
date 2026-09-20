import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdfeupu7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdfeupu7s"/>`,
		"fallback": "mingcute:layout-top-open-line",
	});
}

export default Component;
