import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwbp4q8dw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwbp4q8dw"/>`,
		"fallback": "selfhst:m-t-bank-dark",
	});
}

export default Component;
