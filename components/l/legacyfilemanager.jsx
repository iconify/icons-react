import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhy_q8b-w.css';

const viewBox = {"width":1025,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhy_q8b-w"/>`,
		"fallback": "whh:legacyfilemanager",
	});
}

export default Component;
