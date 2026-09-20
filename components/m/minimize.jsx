import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yik03xb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yik03xb7t"/>`,
		"fallback": "mage:minimize",
	});
}

export default Component;
