import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r59jsbmuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r59jsbmuu"/>`,
		"fallback": "lucide-extended:palette-filled",
	});
}

export default Component;
