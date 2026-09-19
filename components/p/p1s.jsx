import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks-z6wb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks-z6wb1x"/>`,
		"fallback": "cbi:p1s",
	});
}

export default Component;
