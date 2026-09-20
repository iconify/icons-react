import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkcq33bll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkcq33bll"/>`,
		"fallback": "mage:three-d-box-square-fill",
	});
}

export default Component;
