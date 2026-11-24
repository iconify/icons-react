import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n53afodsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n53afodsw"/>`,
		"fallback": "lucide-extended:sun-medium-filled",
	});
}

export default Component;
