import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnu0jdenc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnu0jdenc"/>`,
		"fallback": "selfhst:obsidian",
	});
}

export default Component;
