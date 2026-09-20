import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa4xafn4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa4xafn4g"/>`,
		"fallback": "mdi:selection-lasso",
	});
}

export default Component;
