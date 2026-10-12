import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shrbis3_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="shrbis3_n"/>`,
		"fallback": "lucide-extended:keyboard-filled",
	});
}

export default Component;
