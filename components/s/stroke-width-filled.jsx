import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcc1i2lqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcc1i2lqf"/>`,
		"fallback": "lucide-extended:stroke-width-filled",
	});
}

export default Component;
