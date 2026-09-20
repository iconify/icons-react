import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-2d2jb1r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l-2d2jb1r"/>`,
		"fallback": "streamline:safe-vault-remix",
	});
}

export default Component;
