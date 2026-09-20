import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eonvu3b-p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eonvu3b-p"/>`,
		"fallback": "streamline:interface-folder-delete-remove-minus-folder-subtract-delete",
	});
}

export default Component;
