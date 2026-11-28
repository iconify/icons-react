import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpx5xid-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpx5xid-e"/>`,
		"fallback": "noviair-light:user-clock",
	});
}

export default Component;
