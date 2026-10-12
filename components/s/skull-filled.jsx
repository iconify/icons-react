import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxxa1hb9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lxxa1hb9e"/>`,
		"fallback": "lucide-extended:skull-filled",
	});
}

export default Component;
