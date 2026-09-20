import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9en79b9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9en79b9h"/>`,
		"fallback": "lucide-lab:pear",
	});
}

export default Component;
