import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz_8thepw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sz_8thepw"/>`,
		"fallback": "reicon:receipt-filled",
	});
}

export default Component;
