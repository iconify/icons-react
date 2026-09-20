import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqbn7bbia.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqbn7bbia"/>`,
		"fallback": "streamline:interface-edit-attachment-2-attachment-link-paperclip-unlink",
	});
}

export default Component;
