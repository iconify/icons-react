import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivmprj5xh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivmprj5xh"/>`,
		"fallback": "reicon:strongbox-filled",
	});
}

export default Component;
