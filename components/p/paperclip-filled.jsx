import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyf2kv-0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gyf2kv-0l"/>`,
		"fallback": "reicon:paperclip-filled",
	});
}

export default Component;
