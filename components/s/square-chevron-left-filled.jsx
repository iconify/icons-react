import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iae1v6etf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iae1v6etf"/>`,
		"fallback": "lucide-extended:square-chevron-left-filled",
	});
}

export default Component;
