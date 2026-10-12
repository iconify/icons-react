import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw96_ebrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw96_ebrs"/>`,
		"fallback": "lucide-extended:rows-4-filled",
	});
}

export default Component;
