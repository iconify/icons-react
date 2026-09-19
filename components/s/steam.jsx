import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsumi_t5k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsumi_t5k"/>`,
		"fallback": "ion:steam",
	});
}

export default Component;
