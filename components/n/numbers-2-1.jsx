import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wud-c2bls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wud-c2bls"/>`,
		"fallback": "tdesign:numbers-2-1",
	});
}

export default Component;
