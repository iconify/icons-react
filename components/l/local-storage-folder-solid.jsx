import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2l4x0b4s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l2l4x0b4s"/>`,
		"fallback": "streamline:local-storage-folder-solid",
	});
}

export default Component;
