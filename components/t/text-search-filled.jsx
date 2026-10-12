import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_6u22boz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_6u22boz"/>`,
		"fallback": "lucide-extended:text-search-filled",
	});
}

export default Component;
