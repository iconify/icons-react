import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuu893b7n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nuu893b7n"/>`,
		"fallback": "file-icons:lua",
	});
}

export default Component;
