import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8xwu9g6i.css';
import '../../css/q/qs9rc4bkd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="s8xwu9g6i"/><path class="qs9rc4bkd"/>`,
		"fallback": "ion:phone-portrait-outline",
	});
}

export default Component;
