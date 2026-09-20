import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/t/tsby9osmt.css';
import '../../css/e/e58_ef4xl.css';
import '../../css/l/lngmmbbjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="tsby9osmt"/><path class="e58_ef4xl"/><path class="lngmmbbjz"/></g>`,
		"fallback": "streamline-logos:sketch-logo",
	});
}

export default Component;
