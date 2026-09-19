import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixf3ftt8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixf3ftt8k"/>`,
		"fallback": "ci:sad",
	});
}

export default Component;
