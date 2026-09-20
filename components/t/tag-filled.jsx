import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndo2xbcch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndo2xbcch"/>`,
		"fallback": "tdesign:tag-filled",
	});
}

export default Component;
