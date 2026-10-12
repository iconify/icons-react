import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obo_3dbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obo_3dbiq"/>`,
		"fallback": "lucide-extended:paw-print-filled",
	});
}

export default Component;
