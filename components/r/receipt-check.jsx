import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja0-wk5fu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja0-wk5fu"/>`,
		"fallback": "noviair:receipt-check",
	});
}

export default Component;
