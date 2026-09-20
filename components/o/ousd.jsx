import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4-wcftdv.css';
import '../../css/x/x4rg6acqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4-wcftdv"/><path clip-rule="evenodd" class="x4rg6acqw"/>`,
		"fallback": "token:ousd",
	});
}

export default Component;
