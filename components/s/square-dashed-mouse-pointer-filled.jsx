import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwn1u0bqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwn1u0bqm"/>`,
		"fallback": "lucide-extended:square-dashed-mouse-pointer-filled",
	});
}

export default Component;
