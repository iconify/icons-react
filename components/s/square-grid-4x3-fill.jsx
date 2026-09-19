import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/biwamf8aq.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="biwamf8aq"/>`,
		"fallback": "f7:square-grid-4x3-fill",
	});
}

export default Component;
