import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtwl263qg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtwl263qg"/>`,
		"fallback": "selfhst:shaarli-light",
	});
}

export default Component;
