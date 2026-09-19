import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7f_7yuah.css';

const viewBox = {"width":94,"height":723};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7f_7yuah"/>`,
		"fallback": "ls:quotesingle",
	});
}

export default Component;
