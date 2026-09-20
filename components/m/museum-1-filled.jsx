import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni_p_obvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni_p_obvb"/>`,
		"fallback": "tdesign:museum-1-filled",
	});
}

export default Component;
