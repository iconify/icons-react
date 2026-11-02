import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbk25gbtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbk25gbtb"/>`,
		"fallback": "mingcute:user-info-line",
	});
}

export default Component;
