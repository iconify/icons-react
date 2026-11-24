import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k42fv8bkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k42fv8bkk"/>`,
		"fallback": "lucide-extended:pen-off-filled",
	});
}

export default Component;
