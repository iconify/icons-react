import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imv2uwbty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imv2uwbty"/>`,
		"fallback": "vadivam:maximize",
	});
}

export default Component;
