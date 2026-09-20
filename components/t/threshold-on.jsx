import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzim9rbfp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzim9rbfp"/>`,
		"fallback": "ix:threshold-on",
	});
}

export default Component;
