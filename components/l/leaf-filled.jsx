import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9h1r_bas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9h1r_bas"/>`,
		"fallback": "lucide-extended:leaf-filled",
	});
}

export default Component;
