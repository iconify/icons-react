import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krsa40z7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krsa40z7v"/>`,
		"fallback": "lucide-extended:volume-x-filled",
	});
}

export default Component;
