import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu2rdxylr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nu2rdxylr"/>`,
		"fallback": "lucide-extended:rat-filled",
	});
}

export default Component;
