import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws5p65b4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws5p65b4i"/>`,
		"fallback": "cbi:marvel",
	});
}

export default Component;
