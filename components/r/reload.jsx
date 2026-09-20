import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p89j6cc-u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p89j6cc-u"/>`,
		"fallback": "ix:reload",
	});
}

export default Component;
