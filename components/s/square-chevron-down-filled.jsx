import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eca545beg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eca545beg"/>`,
		"fallback": "lucide-extended:square-chevron-down-filled",
	});
}

export default Component;
