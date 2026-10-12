import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9aylmbad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9aylmbad"/>`,
		"fallback": "lucide-extended:map-minus-filled",
	});
}

export default Component;
