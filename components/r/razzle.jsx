import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlolbtbxk.css';

const viewBox = {"width":403,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlolbtbxk"/>`,
		"fallback": "file-icons:razzle",
	});
}

export default Component;
