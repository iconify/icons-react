import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs8_8nb2s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs8_8nb2s"/>`,
		"fallback": "ooui:logo-meta-wiki",
	});
}

export default Component;
