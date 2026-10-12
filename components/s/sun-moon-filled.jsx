import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dste_4pjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dste_4pjv"/>`,
		"fallback": "lucide-extended:sun-moon-filled",
	});
}

export default Component;
