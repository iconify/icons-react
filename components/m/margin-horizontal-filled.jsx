import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lud6hzb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lud6hzb4i"/>`,
		"fallback": "lucide-extended:margin-horizontal-filled",
	});
}

export default Component;
