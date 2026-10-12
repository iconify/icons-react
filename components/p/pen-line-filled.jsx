import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfmj2etah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfmj2etah"/>`,
		"fallback": "lucide-extended:pen-line-filled",
	});
}

export default Component;
