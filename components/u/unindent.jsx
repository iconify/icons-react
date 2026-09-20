import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb76nfbjt.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-7};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb76nfbjt"/>`,
		"fallback": "jam:unindent",
	});
}

export default Component;
