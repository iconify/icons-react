import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1q4onb5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1q4onb5l"/>`,
		"fallback": "lucide-extended:sun-dim-filled",
	});
}

export default Component;
