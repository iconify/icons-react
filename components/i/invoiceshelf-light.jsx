import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy88r021n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy88r021n"/>`,
		"fallback": "selfhst:invoiceshelf-light",
	});
}

export default Component;
