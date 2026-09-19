import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhi88lb2h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhi88lb2h"/>`,
		"fallback": "bi:union",
	});
}

export default Component;
