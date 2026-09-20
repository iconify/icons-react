import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu88pzzzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu88pzzzv"/>`,
		"fallback": "mingcute:ppt-line",
	});
}

export default Component;
