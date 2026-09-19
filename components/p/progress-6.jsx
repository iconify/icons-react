import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv3cf2bwb.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wv3cf2bwb"/>`,
		"fallback": "websymbol:progress-6",
	});
}

export default Component;
