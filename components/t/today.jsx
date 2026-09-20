import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx2lb6epn.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bx2lb6epn"/>`,
		"fallback": "wpf:today",
	});
}

export default Component;
