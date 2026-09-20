import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir7lnvtyq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir7lnvtyq"/>`,
		"fallback": "selfhst:microsoft-excel-2000-light",
	});
}

export default Component;
