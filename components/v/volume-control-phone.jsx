import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z194h6bnl.css';

const viewBox = {"width":1408,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z194h6bnl"/>`,
		"fallback": "fa:volume-control-phone",
	});
}

export default Component;
