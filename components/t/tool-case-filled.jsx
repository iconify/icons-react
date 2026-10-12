import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7_paragx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b7_paragx"/>`,
		"fallback": "lucide-extended:tool-case-filled",
	});
}

export default Component;
