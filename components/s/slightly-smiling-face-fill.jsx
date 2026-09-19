import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0vhp-jis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d0vhp-jis"/>`,
		"fallback": "iconamoon:slightly-smiling-face-fill",
	});
}

export default Component;
