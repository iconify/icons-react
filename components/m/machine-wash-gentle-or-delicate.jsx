import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv-rjdbpf.css';

const viewBox = {"width":528,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv-rjdbpf"/>`,
		"fallback": "ps:machine-wash-gentle-or-delicate",
	});
}

export default Component;
