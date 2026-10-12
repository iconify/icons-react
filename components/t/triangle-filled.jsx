import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld7b2-b0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld7b2-b0o"/>`,
		"fallback": "lucide-extended:triangle-filled",
	});
}

export default Component;
