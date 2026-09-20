import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r--l4krnr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r--l4krnr"/>`,
		"fallback": "streamline:interface-link-create-hyperlink-link-make-unlink",
	});
}

export default Component;
