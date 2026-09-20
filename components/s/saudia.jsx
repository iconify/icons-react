import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uay0o2xxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uay0o2xxb"/>`,
		"fallback": "thesvg:saudia",
	});
}

export default Component;
