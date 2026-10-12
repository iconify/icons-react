import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gplnk4bil.css';
import '../../css/k/k_txi0raq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gplnk4bil"/><path class="k_txi0raq"/>`,
		"fallback": "lucide-extended:orbit-filled",
	});
}

export default Component;
