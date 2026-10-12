import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3m8f8bnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y3m8f8bnk"/>`,
		"fallback": "lucide-extended:square-asterisk-filled",
	});
}

export default Component;
