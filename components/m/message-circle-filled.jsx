import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqwamo7sx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqwamo7sx"/>`,
		"fallback": "lucide-extended:message-circle-filled",
	});
}

export default Component;
