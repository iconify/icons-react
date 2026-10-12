import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fup3y25nz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fup3y25nz"/>`,
		"fallback": "lucide-extended:square-activity-filled",
	});
}

export default Component;
