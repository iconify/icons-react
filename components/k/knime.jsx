import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w98-i8vwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w98-i8vwc"/>`,
		"fallback": "simple-icons:knime",
	});
}

export default Component;
