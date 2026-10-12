import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6l54sb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z6l54sb0e"/>`,
		"fallback": "lucide-extended:receipt-turkish-lira-filled",
	});
}

export default Component;
