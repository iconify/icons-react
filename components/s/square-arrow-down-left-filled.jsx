import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a20ldrbnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a20ldrbnn"/>`,
		"fallback": "lucide-extended:square-arrow-down-left-filled",
	});
}

export default Component;
