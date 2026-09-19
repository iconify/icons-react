import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_jtldbsb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_jtldbsb"/>`,
		"fallback": "icon-park:phone-telephone",
	});
}

export default Component;
