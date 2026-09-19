import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw-cae8ee.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw-cae8ee"/>`,
		"fallback": "f7:tickets",
	});
}

export default Component;
