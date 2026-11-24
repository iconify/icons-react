import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q60-wi-ng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q60-wi-ng"/>`,
		"fallback": "lucide-extended:mouse-pointer-click-filled",
	});
}

export default Component;
