import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmmy88b-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmmy88b-c"/>`,
		"fallback": "lucide-extended:pin-filled",
	});
}

export default Component;
