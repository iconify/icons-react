import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhjd6lxmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhjd6lxmm"/>`,
		"fallback": "mdi:share-outline",
	});
}

export default Component;
