import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thj6iccmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thj6iccmb"/>`,
		"fallback": "noviair:jump-rope",
	});
}

export default Component;
