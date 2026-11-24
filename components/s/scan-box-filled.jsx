import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkdj8isek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkdj8isek"/>`,
		"fallback": "lucide-extended:scan-box-filled",
	});
}

export default Component;
