import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/netg96bwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="netg96bwn"/>`,
		"fallback": "thesvg-color:labview",
	});
}

export default Component;
