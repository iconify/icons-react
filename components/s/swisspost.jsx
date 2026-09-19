import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmau_cbnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmau_cbnl"/>`,
		"fallback": "cbi:swisspost",
	});
}

export default Component;
