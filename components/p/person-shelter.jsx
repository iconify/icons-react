import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w09pfms2w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w09pfms2w"/>`,
		"fallback": "fa6-solid:person-shelter",
	});
}

export default Component;
