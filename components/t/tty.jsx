import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crd1z6bws.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crd1z6bws"/>`,
		"fallback": "picon:tty",
	});
}

export default Component;
