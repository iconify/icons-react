import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ier1q-get.css';
import '../../css/y/y4yyrac7j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ier1q-get"/><path class="y4yyrac7j"/>`,
		"fallback": "streamline-pixel:interface-essential-crown",
	});
}

export default Component;
