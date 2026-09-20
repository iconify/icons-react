import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd7e0lmvs.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd7e0lmvs"/>`,
		"fallback": "oi:share",
	});
}

export default Component;
