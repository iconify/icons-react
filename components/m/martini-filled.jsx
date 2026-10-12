import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0soa6kzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0soa6kzv"/>`,
		"fallback": "lucide-extended:martini-filled",
	});
}

export default Component;
