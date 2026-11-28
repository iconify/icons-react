import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkr1zvh1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkr1zvh1x"/>`,
		"fallback": "noviair:server-alert",
	});
}

export default Component;
