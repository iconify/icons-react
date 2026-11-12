import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0g7ckb0k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0g7ckb0k"/>`,
		"fallback": "selfhst:papermc-paper-light",
	});
}

export default Component;
