import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd331cczw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xd331cczw"/>`,
		"fallback": "lucide-extended:stroke-line-join-bevel-filled",
	});
}

export default Component;
