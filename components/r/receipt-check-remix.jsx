import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfwke2ivk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tfwke2ivk"/>`,
		"fallback": "streamline:receipt-check-remix",
	});
}

export default Component;
