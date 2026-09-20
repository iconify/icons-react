import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs2agm2zp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs2agm2zp"/>`,
		"fallback": "ooui:previous-rtl",
	});
}

export default Component;
