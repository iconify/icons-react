import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhxig0hap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhxig0hap"/>`,
		"fallback": "mage:trash-2-fill",
	});
}

export default Component;
