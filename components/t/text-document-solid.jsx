import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1_ig-50q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w1_ig-50q"/>`,
		"fallback": "teenyicons:text-document-solid",
	});
}

export default Component;
