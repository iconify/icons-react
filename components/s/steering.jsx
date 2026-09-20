import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzzxyvb_k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzzxyvb_k"/>`,
		"fallback": "ix:steering",
	});
}

export default Component;
