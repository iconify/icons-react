import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlg3a0b6b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlg3a0b6b"/>`,
		"fallback": "selfhst:microsoft-word-2013-dark",
	});
}

export default Component;
