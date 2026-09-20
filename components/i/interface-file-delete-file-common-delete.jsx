import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxjq2obsy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxjq2obsy"/>`,
		"fallback": "streamline:interface-file-delete-file-common-delete",
	});
}

export default Component;
