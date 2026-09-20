import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xneq1mbiq.css';
import '../../css/o/okweau1mj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xneq1mbiq"/><path class="okweau1mj"/>`,
		"fallback": "mingcute:safari-line",
	});
}

export default Component;
