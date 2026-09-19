import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqtq3vidn.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqtq3vidn"/>`,
		"fallback": "f7:square-grid-3x2-fill",
	});
}

export default Component;
