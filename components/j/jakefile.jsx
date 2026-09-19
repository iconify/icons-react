import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_p-fzb8j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f_p-fzb8j"/>`,
		"fallback": "file-icons:jakefile",
	});
}

export default Component;
