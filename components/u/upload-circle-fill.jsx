import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsu6aob7s.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsu6aob7s"/>`,
		"fallback": "f7:upload-circle-fill",
	});
}

export default Component;
