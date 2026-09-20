import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdf0grb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdf0grb1s"/>`,
		"fallback": "thesvg:ovh",
	});
}

export default Component;
