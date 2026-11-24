import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyzld6b1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyzld6b1n"/>`,
		"fallback": "lucide-extended:mic-signal-filled",
	});
}

export default Component;
