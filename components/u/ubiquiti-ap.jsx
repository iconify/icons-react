import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs5vj2cne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs5vj2cne"/>`,
		"fallback": "cbi:ubiquiti-ap",
	});
}

export default Component;
