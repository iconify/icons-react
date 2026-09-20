import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlg-pycqh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlg-pycqh"/>`,
		"fallback": "selfhst:nasdaq-light",
	});
}

export default Component;
