import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agbkatb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agbkatb_l"/>`,
		"fallback": "thesvg:mlb",
	});
}

export default Component;
