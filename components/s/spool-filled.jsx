import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qybtbac7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qybtbac7k"/>`,
		"fallback": "lucide-extended:spool-filled",
	});
}

export default Component;
