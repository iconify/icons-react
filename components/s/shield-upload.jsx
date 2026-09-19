import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqo7z6bak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqo7z6bak"/>`,
		"fallback": "iconoir:shield-upload",
	});
}

export default Component;
