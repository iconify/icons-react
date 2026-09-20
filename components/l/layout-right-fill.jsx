import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp4ayr8uq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp4ayr8uq"/>`,
		"fallback": "mage:layout-right-fill",
	});
}

export default Component;
