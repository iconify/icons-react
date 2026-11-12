import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzk41ybbv.css';
import '../../css/x/xgliqgswb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzk41ybbv"/><path class="xgliqgswb"/>`,
		"fallback": "selfhst:keyhelp",
	});
}

export default Component;
