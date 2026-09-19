import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddkj1ibij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ddkj1ibij"/>`,
		"fallback": "iconamoon:shield-fill",
	});
}

export default Component;
