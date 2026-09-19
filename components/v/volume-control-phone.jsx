import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccrcs2bkk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccrcs2bkk"/>`,
		"fallback": "fa7-solid:volume-control-phone",
	});
}

export default Component;
