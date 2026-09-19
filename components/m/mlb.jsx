import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xosmew7jp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xosmew7jp"/>`,
		"fallback": "cbi:mlb",
	});
}

export default Component;
