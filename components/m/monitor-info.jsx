import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nih4i_b-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nih4i_b-z"/>`,
		"fallback": "noviair:monitor-info",
	});
}

export default Component;
