import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah8g6_bii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah8g6_bii"/>`,
		"fallback": "mage:shopping-bag-fill",
	});
}

export default Component;
