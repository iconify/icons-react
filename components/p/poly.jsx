import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nloedc8ax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nloedc8ax"/>`,
		"fallback": "thesvg-color:poly",
	});
}

export default Component;
