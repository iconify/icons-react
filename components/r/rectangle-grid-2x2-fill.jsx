import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nloml38ha.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nloml38ha"/>`,
		"fallback": "f7:rectangle-grid-2x2-fill",
	});
}

export default Component;
