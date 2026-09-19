import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyx33t-2x.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyx33t-2x"/>`,
		"fallback": "f7:lessthan-circle-fill",
	});
}

export default Component;
