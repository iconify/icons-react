import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq96s7b-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq96s7b-v"/>`,
		"fallback": "thesvg:stadia",
	});
}

export default Component;
