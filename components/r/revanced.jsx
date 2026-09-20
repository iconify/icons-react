import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dus1nvzmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dus1nvzmq"/>`,
		"fallback": "thesvg-color:revanced",
	});
}

export default Component;
