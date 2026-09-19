import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr00jacgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dr00jacgu"/>`,
		"fallback": "griddy-icons:volume-cancel-filled",
	});
}

export default Component;
